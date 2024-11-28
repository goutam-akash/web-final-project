const API_KEY = "your_openweathermap_api_key";

export interface WeatherData {
    temp: number;
    condition: string;
}

export async function WeatherResponse(city: string): Promise<WeatherData> {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
    if (!response.ok) throw new Error("Failed to fetch weather data");

    const data = await response.json();
    return {
        temp: data.main.temp,
        condition: data.weather[0].description
    };
}
