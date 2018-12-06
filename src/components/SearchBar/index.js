import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

    state = {
        searchTerm: ''
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    };

    handleButtonClick = (query) => {
        this.props.getNews(query);
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        if (this.state.searchTerm) {
            // this.props.getNews(this.state.query);
            console.log(`Searching for ${this.state.searchTerm}`);
            this.setState({ searchTerm: '' });
        }

    };


    render() {
        return (
            <div className="wrap">
                <form onSubmit={this.handleFormSubmit} className="search">
                    <input
                        onChange={this.handleInputChange}
                        name="searchTerm"
                        value={this.state.searchTerm}
                        type="text" className="searchTerm"
                        placeholder="See the 5 day forecast in your city!"
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