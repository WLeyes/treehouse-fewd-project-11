import React, { Component } from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';

// Component imports
import SearchForm from  './Header/SearchForm';
import Navigation from  './Header/Navigation';
import MainContent from './MainContent';

// CSS Import
import './css/app.css';
class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchForm />
        <Navigation />
        <MainContent />
        </div>
    );
  }
}

export default App;
