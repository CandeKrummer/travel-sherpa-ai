import express, { Request, Response } from "express";
import { runTravelPlanner } from "./index.js";

const app = express();
app.use(express.json());

app.post("/api/chat", (req: Request, res: Response): void => {
    (async () => {
        const { message, threadId } = req.body;

        if (!message) {
            return res.status(400).json({ error: "El campo 'message' es requerido." });
        }

        try {
            const response = await runTravelPlanner(message, threadId || "default_thread");
            res.json({ response });
        } catch (error) {
            console.error("Error en el chatbot:", error);
            res.status(500).json({ error: "Ocurrió un error al procesar la solicitud." });
        }
    })();
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));