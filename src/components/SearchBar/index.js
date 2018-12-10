import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {


    render() {
        return (
            <div className="searchWrap">
                <form onSubmit={this.props.handleFormSubmit} className="search">
                    <input
                        onChange={this.props.handleInputChange}
                        name="searchTerm"
                        value={this.props.searchTerm}
                        type="text" className="searchTerm"
                        placeholder="Search by City"
                    />
                    <button type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
        )
    };
};

export default SearchBar;   