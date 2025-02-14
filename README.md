# Travel Sherpa AI

Consiste en una herramienta desarrollada con IA que sirve para generar conversaciones con un chatbot con el objetivo de planificar un viaje. Incluyendo propuestas de presupuesto, hoteles, vuelos y recomendaciones sobre qué llevar en la valija según el clima.

## Requisitos Previos

Tener instalado Node en el equipo
- [Node.js](https://nodejs.org/) (versión 18 o superior)

## Instalación

Una vez cumplidos los requisitos previos, es importante seguir los siguientes pasos para la instalación del proyecto:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
2. **Instalar dependencias**:
   ```bash
   npm install
3. **Configurar las variables de entorno**:
   ```bash
   OPENAI_API_KEY = "Tu clave de openai"
   OPENWEATHERMAP_API_KEY = "Tu clave de openweather"
  Se requiere crear un archivo .env en la carpeta base del proyecto.
  Luego es necesario generar las API KEY para los servicios utilizados y ponerlas en las variables de entorno.
  - Para generar la key de openai es necesario tener una cuenta que tenga la posibilidad de usar el modelo "gpt-4o" y luego ir a este [link](https://platform.openai.com/api-keys) para obtener la key.
  - Para generar la key de openweather solo hace falta hacerse una cuenta en la página [OpenWeather](https://home.openweathermap.org/) y luego entrar a este [link](https://home.openweathermap.org/api_keys) para obtener la key (recomiento usar la que aparece como default).

4. **Iniciar el servidor**:
   ```bash
   npm run dev

## Probar el Endpoint con Postman

Luego, podemos probar la API en Postman siguiendo estos pasos:

- Abrir Postman y crear una nueva solicitud.
- Seleccionar el método POST.
- Ingresar la URL del endpoint, que es:
```bash
http://localhost:3000/api/chat
```
- Ir a la pestaña "Body", seleccionar raw y elegir el formato JSON.
- Ingresar la siguiente estructura JSON como body de la solicitud:
```
{
  "message": "Podrías planificarme un viaje a estados unidos que pase por todos los parques de disney de orlando en el 10 de octubre de 2025. Teniendo en cuenta que tengo un presupuesto de 3000 dolares",
  "threadId": "chat_001"
}
```
En este caso, el campo "message" corresponde al mensaje ingresado por el usuario. Y "threadId" es el campo que permite mantener la memoria de los hilos de cada chat.


## Ejemplos de resultados
Comiezo haciendo una solicitud para planificar un viaje
```
{
  "message": "Podrías planificarme un viaje a estados unidos que pase por todos los parques de disney de orlando en el 10 de octubre de 2025. Teniendo en cuenta que tengo un presupuesto de 3000 dolares",
  "threadId": "chat_001"
}
```
Respuesta generada:
> "Planificar un viaje a los parques de Disney en Orlando con un presupuesto de $3,000 puede ser una experiencia fantástica si manejamos los recursos de manera adecuada. Te ofreceré un itinerario detallado para asegurarnos de que puedas disfrutar al máximo dentro de tu presupuesto. \n\n**Fecha del Viaje: 10 de Octubre de 2025**\nDuración: 5 días\n\n---\n\n### Día 1: Llegada a Orlando\n\n- **Vuelo:** \n  - Busca vuelos económicos con llegada a Orlando antes del mediodía. Los precios de los vuelos variarán, pero podemos considerar una media de $300 - $500, dependiendo desde dónde viajes. Asegúrate de reservar con antelación.\n\n- **Transporte Aeropuerto-Hotel:**\n  - Usa el **Shuttle** de Disney (Disney's Magical Express) o servicios como Lyft/Uber, aproximadamente $35.\n\n- **Acomodación:**\n  - Hospédate en un hotel económico pero cómodo como Holiday Inn Express & Suites ($100 - $150 por noche).\n  - Costo estimado para 4 noches: $400 - $600.\n\n### Día 2: Magic Kingdom\n\n- **Entradas:**\n  - Ticket entrada individual ronda los $150 (precio puede variar, considera promociones o paquetes).\n  \n- **Gastos Comida:**\n  - Desayuno rápido en hotel: Incluido.\n  - Almuerzo y cena dentro del parque: $60 / día.\n\n- **Actividades:**\n  - Inicia temprano para aprovechar las atracciones populares.\n  - Disfruta del desfile nocturno y fuegos artificiales.\n\n### Día 3: Epcot\n\n- **Entradas:**\n  - Precio similar a Magic Kingdom, alrededor de $150.\n\n- **Gastos Comida:**\n  - Explora el Food and Wine Festival si está disponible ($70 para experiencias culinarias).\n\n- **Actividades:**\n  - Prueba atracciones emblemáticas como \"Soarin'\" y \"Spaceship Earth\".\n  - No te pierdas el espectáculo nocturno \"Harmonious\".\n\n### Día 4: Disney's Hollywood Studios\n\n- **Entradas:**\n  - Alrededor de $150.\n\n- **Gastos Comida:**\n  - Desayuno (hotel incluido).\n  - Explore el área de Star Wars y Toy Story Land $60.\n\n- **Actividades:**\n  - Prioriza atracciones como \"Rise of the Resistance\" y \"Tower of Terror\".\n  - Disfruta de los eventos y shows nocturnos.\n\n### Día 5: Animal Kingdom y Regreso\n\n- **Entradas:**\n  - Alrededor de $150.\n\n- **Gastos Comida:**\n  - Desayuno en hotel (incluido).\n  - Prueba especialidades en Pandora – The World of Avatar $60.\n\n- **Actividades:**\n  - Experimenta atracciones principales como \"Avatar Flight of Passage\".\n  - Termina el día con el espectáculo \"Rivers of Light\".\n\n### Presupuesto Total Estimado:\n\n- **Vuelos:** $300 - $500\n- **Transporte Local:** $140\n- **Alojamiento:** $400 - $600\n- **Entradas a los Parques:** 4 x $150 = $600\n- **Comida en Parques:** 4 días x $60 = $240\n- **Extras/Recuerdos:** $220\n\n### Total: $2200 - $2300 aproximadamente\n\nEsto deja un margen para imprevistos o para invertir en mejoras como mejores alojamientos o experiencias extra dentro de los parques (como Genie+ o eventos especiales).\n\n### Consejos:\n\n1. **Reserva Temprana:** Asegura tarifas más bajas y disponibilidad.\n2. **Buscar Descuentos:** Verifica si Disney ofrece tarifas promocionales.\n3. **Comida Fuera de Parques:** Considera opciones locales fuera del parque para ahorrar.\n4. **Planificación en Línea:** Usa la app de Disney para planificar atracciones y reducir tiempos de espera.\n\nEspero que este itinerario te sea útil y disfrutes al máximo tu aventura en Disney World Orlando. ¡Feliz viaje!\n\nPara tu viaje a los parques de Disney en Orlando el 10 de octubre de 2025, el clima estará nublado con una temperatura de aproximadamente 17.88°C y una humedad del 90%. Esto sugiere un clima fresco y un poco húmedo. Aquí tienes algunas recomendaciones sobre qué llevar:\n\n### Ropa:\n- **Capas Ligeras:** Lleva una camiseta de manga larga o un suéter ligero, ya que el clima será fresco, especialmente por la mañana y al atardecer.\n- **Impermeable o Chaqueta Ligera:** Debido al clima nublado y la alta humedad, podría ser útil llevar un impermeable o una chaqueta ligera en caso de lloviznas.\n- **Pantalones Cómodos:** Opta por pantalones largos y cómodos o leggings para mantenerte abrigado.\n- **Calzado Comodo:** Zapatos cerrados y cómodos como deportivas o botas de senderismo, ya que estarás caminando bastante.\n\n### Accesorios:\n- **Paraguas Plegable o Poncho de Lluvia:** Por si llega a llover ligeramente.\n- **Gorra o Sombrero:** Aunque esté nublado, siempre es recomendable protegerse del sol.\n- **Gafas de Sol:** En caso de que las nubes se despejen.\n\n### Otros:\n- **Protector Solar:** Aun con nubes, es importante protegerse de los rayos UV.\n- **Botella de Agua Reutilizable:** Importante para mantenerse hidratado durante el día.\n- **Bolsa Mochila Pequeña:** Para llevar tus pertenencias de manera cómoda.\n\nCon estas recomendaciones, estarás preparado para disfrutar de tus días en los parques de Disney sin preocupaciones climáticas. ¡Que lo disfrutes al máximo!"

Luego sigo la conversación agregando más opciones
```
{
  "message": "Si yo quisiera agregar al viaje a disney la posibilidad de ir unos días a nueva york y ver minimo 3 o 4 musicales. Con un presupuesto agregado de 1000 dolares, qué opciones propones?",
  "threadId": "chat_001"
}
```
Respuesta generada:
> "Agregar una visita a Nueva York para disfrutar de algunos musicales al itinerario de Disney World con un presupuesto adicional de $1,000 es un desafío interesante. Voy a crear un itinerario con opciones razonables para vuelos, alojamiento, y entradas a musicales de Broadway. Aquí tienes mi sugerencia:\n\n**Extensión del Viaje: 3 Días en Nueva York**\n\n### Transporte: Orlando a Nueva York\n\n- **Vuelos:** \n  - Busca vuelos económicos desde Orlando a Nueva York. Las aerolíneas de bajo costo como JetBlue o Frontier podrían ofrecer tarifas alrededor de $100 - $150 ida, especialmente si reservas con anticipación.\n  - Transportación hacia y desde los aeropuertos podría costar alrededor de $50.\n\n### Alojamiento en Nueva York:\n\n- **Opciones de Hospedaje:**\n  - Considera hospedarte en hostales o hoteles económicos de cadenas como Pod Hotels o HI NYC Hostel, con tarifas que rondan los $100 por noche.\n  - Alternativamente, revisa Airbnb para opciones asequibles en Manhattan o Brooklyn.\n\n### Actividades: Broadway y Más\n\n- **Musicales de Broadway:**\n  - Intenta asistir a funciones matutinas (matinée) que suelen ser más económicas.\n  - Usa servicios como TodayTix o TKTS para obtener descuentos de último minuto. Los boletos con descuento pueden costar entre $70 - $100 cada uno.\n  - Presupuesto para 3 musicales: aproximadamente $210 - $300.\n\n### Itinerario Propuesto:\n\n#### Día 1: Llegada a Nueva York\n\n- **Vuelo desde Orlando temprano.**\n- **Check-in en el hotel/hostal.**\n- **Musical por la tarde o noche:**\n  - Procura asistir a un musical clásico como \"El Rey León\" o \"Wicked\".\n\n#### Día 2: Explorar Manhattan y Asistir a Musicals\n\n- **Mañana:**\n  - Desayuna en un café local y explora Central Park o Times Square.\n- **Tarde:**\n  - Asiste a un segundo musical, quizás algo más moderno como \"Hamilton\" o \"Dear Evan Hansen\" (sujeto a disponibilidad de descuentos).\n- **Noche:**\n  - Cena en un restaurante cercano a Broadway (considera opciones de menús económicos).\n\n#### Día 3: Últimas Visitas y Regreso\n\n- **Mañana:**\n  - Visita la Estatua de la Libertad o los museos de la región, si el tiempo lo permite.\n- **Tarde:**\n  - Última oportunidad para un tercer musical con matinée.\n- **Noche:**\n  - Vuelo de regreso a tu lugar de origen.\n\n### Presupuesto Total para Nueva York:\n\n- **Vuelos ida y vuelta:** $200 - $300\n- **Alojamiento:** $300 (3 noches a $100/noche)\n- **Musicales de Broadway:** $210 - $300\n- **Comidas y Transporte Local:** $150 - $200\n\n### Total: Aproximadamente $860 - $1,000\n\n**Consejos:**\n\n1. **Descuentos y Paquetes:** Siempre busca descuentos para tickets de Broadway o paquetes que incluyan varias actividades.\n2. **Planificar Comidas:** Considera llevar snacks y almorzar en locales económicos para ahorrar.\n3. **Reserva Temprana:** Bloquear vuelos y hospedaje lo antes posible para asegurar mejores precios.\n\n¡Espero que este itinerario haga que tu experiencia en Nueva York sea tan memorable como tu visita a Disney en Orlando!\n\nPara tu visita a Nueva York el 10 de octubre de 2025, se espera que el clima esté en su mayoría despejado con algunas nubes, y una temperatura bastante fría de aproximadamente -0.91°C, con una humedad del 55%. Considerando estas condiciones climáticas, aquí tienes algunas sugerencias sobre qué llevar contigo:\n\n### Ropa y Accesorios:\n- **Abrigo de Invierno:** Dado que la temperatura está cerca de los cero grados, asegúrate de llevar un buen abrigo para mantenerte caliente.\n- **Ropa en Capas:** Lleva capas térmicas como camisetas interiores de manga larga y suéteres para mantener el calor.\n- **Bufanda, Gorro y Guantes:** Imprescindibles para protegerse del frío, especialmente al caminar al aire libre.\n- **Pantalones Gruesos:** Opta por pantalones de lana o mezclilla gruesa.\n- **Botas Resistentes al Frío:** Zapatos cerrados y aislados para mantener tus pies calientes.\n\n### Otros Elementos:\n- **Bolsa/Mochila Pequeña:** Para llevar capas adicionales o artículos personales durante tus salidas diarias.\n- **Protector Labial:** Útil para prevenir labios agrietados por el frío.\n- **Humidificador Portátil de Bolsillo:** Si encuentras que la humedad baja te afecta, puede ser beneficioso.\n\nCon estas recomendaciones, estarás preparado para disfrutar de tu estancia en Nueva York mientras ves esos increíbles musicales de Broadway. ¡Espero que sea una experiencia inolvidable!"

También puedo generar un chat distinto y hacer otra solicitud
```
{
  "message": "Quiero hacer un viaje soñado por el sudeste asiático en marzo de 2026. Qué recomendaciones me podés hacer y cuál sería el presupuesto?",
  "threadId": "chat_002"
}
```
Respuesta generada:
>"Planear un viaje soñado por el sudeste asiático es una experiencia emocionante. Para brindarte un itinerario con un presupuesto específico, necesitaría saber la duración de tu viaje y tu presupuesto total. Sin embargo, puedo proporcionarte una guía básica para un viaje de tres semanas, explorando algunas de las principales atracciones en la región, con un presupuesto aproximado.\n\n### Itinerario de Tres Semanas\n\n#### Semana 1: Tailandia\n- **Días 1-3: Bangkok**\n  - Visita el Gran Palacio y el Templo del Buda Esmeralda.\n  - Paseo por los mercados flotantes.\n  - Explora la vida nocturna de Khao San Road.\n  \n- **Días 4-5: Chiang Mai**\n  - Visita al Templo Doi Suthep.\n  - Participa en un curso de cocina tailandesa.\n  - Excursión a un santuario de elefantes ético.\n\n- **Días 6-7: Phuket/Krabi**\n  - Relájate en las playas de Phuket o Krabi.\n  - Excursión en bote a las islas Phi Phi.\n  \n#### Semana 2: Vietnam\n- **Días 8-9: Hanoi**\n  - Recorrido en el casco antiguo y el lago Hoan Kiem.\n  - Visita al mausoleo de Ho Chi Minh.\n\n- **Días 10-11: Bahía de Ha Long**\n  - Crucero de una noche por la bahía en barco.\n  \n- **Días 12-14: Hoi An y Da Nang**\n  - Recorrer la ciudad antigua de Hoi An.\n  - Disfrutar de las playas en Da Nang.\n\n#### Semana 3: Camboya y Laos\n- **Días 15-17: Siem Reap**\n  - Visitar los templos de Angkor Wat al amanecer.\n  - Explorar el mercado nocturno de Siem Reap.\n\n- **Días 18-21: Luang Prabang, Laos**\n  - Exploración del casco histórico y el río Mekong.\n  - Visita a las cascadas de Kuang Si.\n\n### Presupuesto Estimado (Por Persona)\n- **Vuelos Internacionales:** $800 - $1,200\n- **Alojamiento:** \n  - Hostels u hoteles económicos: $15 - $30 por noche\n  - Hoteles de gama media: $40 - $80 por noche\n  \n- **Transporte Local:** $150 - $250 (vuelos internos, buses, trenes)\n- **Comida:** $10 - $20 diarios, dependiendo del tipo de comida.\n- **Actividades y Entradas:** $300 - $500\n- **Extras y Compras:** $150 - $300\n- **Total Estimado:** $2,500 - $3,500\n\n### Recomendaciones:\n1. **Reservar Vuelos con Anticipación:** Los precios pueden variar, así que busca promociones con tiempo.\n2. **Seguro de Viaje:** Es esencial tenerlo para cualquier emegencia médica o de otro tipo.\n3. **Investigación de Cultura y Normas Locales:** Familiarízate con las costumbres y leyes de cada país que visites.\n4. **Vacunas y Salud:** Consulta a un médico sobre las vacunas recomendadas para el sudeste asiático.\n\nAjusta este itinerario según tus intereses personales, duración del viaje y presupuesto específico. ¡Espero que tengas un viaje increíble y lleno de aventura!\n\nAquí tienes una idea del clima en algunas de las ciudades que podrías visitar en marzo de 2026:\n\n### Clima en Marzo\n\n1. **Bangkok, Tailandia (15 de marzo de 2026)**\n   - Clima: Cielo despejado\n   - Temperatura: 31.4°C \n   - Humedad: 57%\n\n   **Qué llevar**: \n   - Ropa ligera y transpirable\n   - Sombrero o gorra\n   - Protector solar\n   - Gafas de sol\n   - Calzado cómodo para caminar\n\n2. **Hanoi, Vietnam (15 de marzo de 2026)**\n   - Clima: Nubes dispersas\n   - Temperatura: 21°C\n   - Humedad: 86%\n\n   **Qué llevar**:\n   - Ropa ligera y cómoda\n   - Una chaqueta ligera (puede ser fresco en la mañana o tarde)\n   - Impermeable o paraguas (por si acaso)\n   - Zapatos cómodos para caminar\n\n3. **Siem Reap, Camboya (15 de marzo de 2026)**\n   - Clima: Cielo despejado\n   - Temperatura: 26.8°C\n   - Humedad: 47%\n\n   **Qué llevar**:\n   - Ropa ligera de algodón\n   - Sombrero o gorra\n   - Protector solar\n   - Calzado cómodo para visitar los templos\n   - Botella de agua reutilizable para mantenerse hidratado\n\nCon base en el clima y las actividades planeadas, asegúrate de llevar ropa adecuada para protegerte del sol, así como prendas cómodas para las caminatas o excursiones. Si planeas visitar templos, recuerda que se espera vestimenta modesta, como cubrir los hombros y las rodillas. ¡Espero que estos consejos te ayuden a tener un viaje cómodo y seguro!"
