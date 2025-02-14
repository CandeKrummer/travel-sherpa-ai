import { BaseMessage, BaseMessageFields, HumanMessage, SystemMessage, AIMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import { StateGraph } from "@langchain/langgraph";
import { MemorySaver, Annotation, messagesStateReducer } from "@langchain/langgraph";
import { weatherTool } from "./tools/weatherTool.js"
import { ToolNode } from "@langchain/langgraph/prebuilt";
import dotenv from "dotenv";

dotenv.config();

const tools = [weatherTool]

//creo los modelos y agrego las tools que voy a utilizar
const planningModel = new ChatOpenAI({
    model: "gpt-4o",
    apiKey: process.env.OPENAI_API_KEY
});

const specialistModel = new ChatOpenAI({
    model: "gpt-4o",
    apiKey: process.env.OPENAI_API_KEY
}).bindTools(tools);

const toolNodeForGraph = new ToolNode(tools)

//creo el state que guarda los mensajes con un reducer para ir actualizando la lista automáticamente
const StateAnnotation = Annotation.Root({
    messages: Annotation<BaseMessage[]>({
        reducer: messagesStateReducer,
    }),
});

// creo el nodo para el agente de planificación
async function agentePlanificadorItinerario(state: typeof StateAnnotation.State) {
    const messages = [
        new SystemMessage("Eres un asistente de planificación de viajes. Ayuda al usuario a planificar su viaje con un presupuesto específico. Generando un itinerario de todo el viaje"),
        ...state.messages,
    ];
    const response = await planningModel.invoke(messages);

    return {
        messages: [response],
    };
}

// creo el nodo para el agente que maneja los detalles
async function agenteDetallesViaje(state: typeof StateAnnotation.State) {
    const messages = [
        new SystemMessage("Eres un asistente especializado en hoteles, vuelos y clima. Proporciona recomendaciones de hoteles y vuelos basadas en el presupuesto."),
        new HumanMessage("Basado en el clima y las actividades, qué debería llevar?"),
        ...state.messages,
    ];

    const response = await specialistModel.invoke(messages);

    return {
        messages: [response],
    };
}

// agrego este método para manejar el condicional cuando se utiliza una tool
const shouldContinue = (state: typeof StateAnnotation.State) => {
    const { messages } = state;
    const lastMessage = messages[messages.length - 1];
    if ("tool_calls" in lastMessage && Array.isArray(lastMessage.tool_calls) && lastMessage.tool_calls?.length) {
        return "tools";
    }
    return "__end__";
}

const workflow = new StateGraph(StateAnnotation)
    .addNode("planificar_itinerario", agentePlanificadorItinerario)
    .addNode("manejar_detalles", agenteDetallesViaje)
    .addNode("tools", toolNodeForGraph)

    .addEdge("__start__", "planificar_itinerario")
    .addEdge("planificar_itinerario", "manejar_detalles")
    .addConditionalEdges("manejar_detalles", shouldContinue)
    .addEdge("tools", "manejar_detalles")
    .addEdge("manejar_detalles", "__end__");

// utilizo el memorySaver de LangGraph para mantener los hilos de cada conversación y poder retomarlos con el threadId
const checkpointer = new MemorySaver();

const app = workflow.compile({ checkpointer });


export async function runTravelPlanner(message: string | BaseMessageFields, threadId = "default_thread") {
    const initialState = await app.getState({
        configurable: { thread_id: threadId }
    });
    
    const initialMessages = (initialState?.values?.messages || []) as BaseMessage[];
    const initialMessageCount = initialMessages.length;
    
    const finalState = await app.invoke(
        { messages: [new HumanMessage(message)] },
        { configurable: { thread_id: threadId } }
    );

    const newAIMessages = finalState.messages
        .slice(initialMessageCount)
        .filter((msg) => msg instanceof AIMessage); 

    // devuelvo los mensajes concatenados generados por los agentes
    const formattedResponse = newAIMessages
        .map((msg) => `${msg.content}`)
        .join("\n");

    return formattedResponse;
}