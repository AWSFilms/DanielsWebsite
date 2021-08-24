import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Card, Button, CardColumns, CardGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Destinations from './Destinations';
import About from './About';
import Home from './Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/Destinations" component={Destinations} />
          <Route path="/About" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
