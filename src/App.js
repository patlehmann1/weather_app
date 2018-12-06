import React, { Component } from 'react';
import MainHeader from './components/MainHeader';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <SearchBar />
      </div>
    );
  }
}

export default App;
