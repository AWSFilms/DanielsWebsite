import tok from '/Users/danielvass/danielwebsite/src/pictures/tok.jpeg';
import first from '/Users/danielvass/danielwebsite/src/pictures/germany/IMG_7227.jpg';
import jap from '/Users/danielvass/danielwebsite/src/pictures/japanweb.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Card, Button, CardColumns, CardGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div class="card">
      <img src={first} class="img-fluid" alt="Responsive image" />
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  );
}

export default App;
