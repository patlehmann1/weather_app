import React, { Component } from 'react';
import MainHeader from './components/MainHeader';
import SearchBar from './components/SearchBar';
import RecentSearches from './components/RecentSearches';
import SearchResults from './components/SearchResults';

import './App.css';

class App extends Component {

  state = {
    searchTerm: '',
    recentSearches: [],
    weatherData: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  };

  getWeather = query => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${query},us&type=like&cnt=8&units=imperial&mode=json&appid=c58ce45c0689fc1e28068d46e4bddfb8`)
      .then(response => response.json())
      .then(result => {
        if (result.cod === "404") {
          return "City not found, please try again.";
        } else {
          this.setState({ weatherData: result.list });
        };
      })
  };

  handleButtonClick = query => {
    console.log(`You clicked ${query}!`)
    this.getWeather(query);
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.searchTerm) {
      this.getWeather(this.state.searchTerm);
      this.setState({
        recentSearches: [...this.state.recentSearches, this.state.searchTerm],
        searchTerm: ''
      });

    };

  };

  render() {
    return (
      <div className="App">
        <MainHeader />
        <SearchBar
          searchTerm={this.state.searchTerm}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <RecentSearches
          recentSearches={this.state.recentSearches}
          handleButtonClick={this.handleButtonClick}
        />
        <SearchResults
          weatherData={this.state.weatherData}
        />
      </div>
    );
  };
};

export default App;
