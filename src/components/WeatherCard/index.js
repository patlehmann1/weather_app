import React from 'react';
import './WeatherCard.css';

const WeatherCard = props => {
    return (
        <div className="weatherCard">
            <p>Weather for: {props.weatherTD.slice(10, 16)}</p>
            <p>Temp: {Math.round(props.temp)}°F</p>
            <p>Humidity: {props.humidity}</p>
            <p>Conditions: {props.weather}</p>
        </div>
    )
};

export default WeatherCard;