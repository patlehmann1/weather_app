import React from 'react';
import './WeatherCard.css';

const WeatherCard = props => {
    return (
        <div className="weatherCard">
            <p className="weatherFor">Weather for: {props.weatherTD.slice(10, 16)}</p>
            <p className="mainTemp">{Math.round(props.temp)}°F</p>
            <p className="humidity">Humidity: {props.humidity}</p>
            <p className="conditions">Conditions: {props.weather}</p>
        </div>
    )
};

export default WeatherCard;