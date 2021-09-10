import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Card, Button, CardColumns, CardGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Destinations from './Destinations';
import About from './About';
import st3 from './pictures/tokshorter.jpeg';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Destinations" component={Destinations} />
          <Route path="/About" component={About} />
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return (
    <div className="TopPart">
      <Card className="text-white">
        <Card.Img src={st3} className="img2" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};
export default App;
