import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface WeatherData {
    temp: number;
    condition: string;
}

const Forecast = () => {
    const [searchParams] = useSearchParams();
    const city = searchParams.get("city");
    const [weather, setWeather] = useState<WeatherData | null>(null);

    useEffect(() => {
        if (city) {
            fetch(`/api/weather?city=${city}`)
                .then((res) => res.json())
                .then(setWeather);
        }
    }, [city]);

    if (!city) return <p>No city provided.</p>;

    return (
        <div>
            <h1>Weather Forecast for {city}</h1>
            {weather ? (
                <div>
                    <p>Temperature: {weather.temp}°C</p>
                    <p>Condition: {weather.condition}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Forecast;
