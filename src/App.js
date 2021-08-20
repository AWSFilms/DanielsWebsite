import './App.css';
import jap from 'src/IMG_7227.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Card, Button, CardColumns, CardGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className = "hello">
      <img>src={jap}</img>
    </div>
  );
}

export default App;
