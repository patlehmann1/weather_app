import React, { Component } from 'react';
import MainHeader from './components/MainHeader';
import SearchBar from './components/SearchBar';
import RecentSearches from './components/RecentSearches';

import './App.css';

class App extends Component {

  state = {
    searchTerm: '',
    recentSearches: [],
    hits: null
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  };

  handleButtonClick = query => {
    this.props.getNews(query);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.searchTerm) {
      // this.props.getNews(this.state.searchTerm);
      console.log(`Searching for ${this.state.searchTerm}`);

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
        />
      </div>
    );
  }
}

export default App;
