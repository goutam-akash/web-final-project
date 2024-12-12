"use server";
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();


// Fetch current weather data for a city
export async function fetchWeather(place: String) {
    try {

        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch weather data: ${response.statusText}`);
        }

        const weatherData: any = await response.json();
        return weatherData;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

export async function fetchNavBarWeather(place: String) {
    try {

        const url = `https://api.openweathermap.org/data/2.5/find?q=${place}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch weather data: ${response.statusText}`);
        }

        const weatherData: any = await response.json();
        return weatherData;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}