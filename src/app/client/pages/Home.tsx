import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [city, setCity] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (city) navigate(`/forecast?city=${city}`);
    };

    return (
        <div>
            <h1>Weather App</h1>
            <input 
                type="text" 
                placeholder="Enter city name" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Home;
