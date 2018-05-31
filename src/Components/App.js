import React, { Component} from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Component imports
import SearchForm from  './Header/SearchForm';
import Navigation from  './Header/Navigation';
import MainContent from './MainContent';
import Error404 from    './Error404';

// CSS Import
import './css/app.css';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Navigation />
          <Switch>
          <MainContent />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
