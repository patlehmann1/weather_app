import React from 'react';

const SearchResults = props => {
    return (
        <div>
            {props.weatherData.map((val, index) => {
                return (
                    <div key={index}>
                        {Math.floor(val.main.temp)}
                    </div>
                )
            })}
        </div>
    )
};

export default SearchResults;