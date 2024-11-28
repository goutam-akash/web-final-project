import express, { Request, Response } from "express";
import path from "path";
import fetch from "node-fetch";
import { WeatherResponse } from "./api/weather";

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "../../public")));

// API route for fetching weather
app.get("/api/weather", async (req: Request, res: Response): Promise<void> => {
    const city = req.query.city as string;
    if (!city){ 
        res.status(400).send("City is required");
        return;
    }
    
    try {
        const data = await WeatherResponse(city);
        res.json(data);
    } catch (error) {
        res.status(500).send("Error fetching weather data");
    }
});

// SSR route
app.get("/forecast", async (req: Request, res: Response) => {
    const city = req.query.city as string;
    if (!city) return res.redirect("/");

    try {
        const weatherData = await WeatherResponse(city);
        res.send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Weather Forecast</title>
                <link rel="stylesheet" href="/styles.css">
            </head>
            <body>
                <h1>Weather Forecast for ${city}</h1>
                <div>
                    <p>Temperature: ${weatherData.temp}°C</p>
                    <p>Condition: ${weatherData.condition}</p>
                </div>
                <a href="/">Search Again</a>
            </body>
            </html>
        `);
    } catch {
        res.status(500).send("Error rendering forecast");
    }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
