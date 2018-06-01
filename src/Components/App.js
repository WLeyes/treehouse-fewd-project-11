import React, { Component} from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

// Component imports
import SearchForm  from './Header/SearchForm';
import Navigation  from './Header/Navigation';
import MainContent from './MainContent';
import Error404    from './Error404';
class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="container">
        <Route path = "/search" component={ SearchForm }/>
        <Route path = "/" component={Navigation} />
          <Switch>
            <Route exact path = "/"      render={ () => <MainContent query="pug"/> }/>
            <Route path = "/search/:query" render={ props => <MainContent query={props.match.params.query} />} />
            <Route path = "/cats"      render={ () => <MainContent query="cats"/> }/>
            <Route path = "/dogs"      render={ () => <MainContent query="dogs"/> }/>
            <Route path = "/computers" render={ () => <MainContent query="computers"/> }/>
            <Route component={Error404} />
          </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
