import React, { useState } from "react";

interface SearchBarProps {
    onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [city, setCity] = useState("");

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && city) {
            onSearch(city);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button onClick={() => city && onSearch(city)}>Search</button>
        </div>
    );
};

export default SearchBar;
