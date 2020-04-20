import React, { Component } from "react";
import Counter from './components/Counter';
import './App.css';
// import Button from './components/Button';


class App extends Component {

  componentDidMount() {
    console.log('Component DID MOUNT.');
  }

  render(){
    return (
      <Counter /> 
    );
  }
}

export default App;
