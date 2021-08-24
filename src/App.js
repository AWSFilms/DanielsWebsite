import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Card, Button, CardColumns, CardGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from './TopBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Destinations from './Destinations';
import About from './About';
import Home from './Home';
import pict from ' /Users/danielvass/danielwebsite/src/IMG_7296.jpg'

function App() {
  return (
    <Router>
      <div className="App">
      <img src={pict} class="img2" alt="Responsive image" />
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
