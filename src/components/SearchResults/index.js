import React from 'react';
import WeatherCard from '../WeatherCard';
import './SearchResults.css';

const SearchResults = props => {
    return (
        <div className="searchResults"> 
            {props.weatherData.map((val, index) => {
                return (
                        <WeatherCard
                            key={index}
                            temp={val.main.temp}
                            humidity={val.main.humidity}
                            weather={val.weather.map(item => item.main)}
                            weatherTD={val.dt_txt} 
                        />
                )
            })}
        </div>
        )

};

export default SearchResults;