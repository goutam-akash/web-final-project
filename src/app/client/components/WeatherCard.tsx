import React from "react";

interface WeatherCardProps {
    city: string;
    temp: number;
    condition: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city, temp, condition }) => (
    <div className="weather-card">
        <h2>{city}</h2>
        <p>Temperature: {temp}°C</p>
        <p>Condition: {condition}</p>
    </div>
);

export default WeatherCard;
