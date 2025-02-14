import { tool } from "@langchain/core/tools";
import { z } from "zod";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const weatherTool = tool(async ({ location, date }) => {
    // si no se proporciona una fecha, usar la fecha actual
    const targetDate = date ? new Date(date) : new Date();

    if (isNaN(targetDate.getTime())) {
        throw new Error("Fecha no válida. Usa el formato YYYY-MM-DD.");
    }

    const formattedDate = targetDate.toISOString().split("T")[0];

    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    if (!apiKey) {
        throw new Error("API Key de OpenWeatherMap no configurada.");
    }

    try {
        const response = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
            params: {
                q: location,
                appid: apiKey,
                units: "metric",
                dt: Math.floor(targetDate.getTime() / 1000),
            },
        });

        const weatherData = response.data;

        const weatherDescription = weatherData.weather[0].description;
        const temperature = weatherData.main.temp;
        const humidity = weatherData.main.humidity;

        return `El clima en ${location} el ${formattedDate} es: ${weatherDescription}, con una temperatura de ${temperature}°C y una humedad del ${humidity}%.`;
    } catch (error) {
        console.error("Error al obtener el clima:", error);
        throw new Error("No se pudo obtener el clima para la ubicación especificada.");
    }
}, {
    name: "weather",
    description: "Call to get the weather for a location on a specific date (or the current date if not specified).",
    schema: z.object({
        location: z.string().describe("The location to check the weather for."),
        date: z.string().optional().describe("The date to check the weather for (format: YYYY-MM-DD)."),
    }),
});