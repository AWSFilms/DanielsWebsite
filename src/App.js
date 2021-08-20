import './App.css';
import jap from './IMG_7227.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Card, Button, CardColumns, CardGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className = "hello">
      <header className="App-header">
       <img src={jap} className="App-logo" alt="logo" />
       </header>
    </div>
  );
}

export default App;
