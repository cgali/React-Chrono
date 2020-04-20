import React, { Component } from "react";
import Chrono from './components/Chrono';
import './App.css';
// import Button from './components/Button';


class App extends Component {

  componentDidMount() {
    console.log('Component DID MOUNT.');
  }

  render(){
    return (
      <Chrono /> 
    );
  }
}

export default App;
