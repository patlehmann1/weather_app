import React from 'react';
import './RecentSearches.css';

const RecentSearches = props => {
    return (
        <div className="recentSearches">
            <p>Recent Searches</p>
            {!props.recentSearches.length ? <p>Type in a city to get started!</p> :
                <div className="searchButtons">
                    {props.recentSearches.map((term, index) =>
                        <div key={index} className="buttonRow">
                            <button className="rsb" onClick={() => props.handleButtonClick(term)}>
                                {term}
                            </button>
                        </div>
                    )}
                </div>
            }
        </div >
    )
}

export default RecentSearches;