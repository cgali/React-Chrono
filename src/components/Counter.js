import React, { Component }  from 'react';


class Counter extends Component {

    state = {
      seconds: 57,
      minutes: 59,
      hours: 0,
    };
  
  

  Start = () => {
    this.timer = setInterval(this.counter, 1000) 
    this.setState({ isRunning: true })  
  }

  Stop = () => {
    clearInterval(this.timer)
    this.setState({ isRunning: false }) 
  }

  Reset = () => {
    clearInterval(this.timer)
    this.setState({
      seconds: 0,
      minutes: 0,
      hours: 0,
      isRunning: false,
    })
  }

  counter = () => {
    this.setState(() => {
      if (this.state.minutes === 60) {
        return {
          hours: this.state.hours +1,
          minutes: 0,
          seconds: 1
        }
      }
      else if (this.state.seconds < 59) {
        return { seconds: this.state.seconds + 1 } 
      }
      else {
        return {
          minutes: this.state.minutes +1,
          seconds: 0,
        }
      }
    })
  }

  getSeconds = () => {
    return ('0' + this.state.seconds % 60).slice(-2)
  }

  getMinutes = () => {
    return ('0' + this.state.minutes % 60).slice(-2)
  }

  getHours = () => {
    return ('0' + this.state.hours % 60).slice(-2)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Counter UPDATED from: ', prevState.hours, prevState.minutes, prevState.seconds);
  }

  StartStop = () => {
    return this.state.isRunning ? <button className="button" onClick={ this.Stop }>Stop</button> :
      <button className="button" onClick={ this.Start }>Start</button>
  }


  render() {
    return (
      <div className="counter-box">
        <p>Time</p>
        <hr className="separator"/>
        <div>{ this.getHours() } : { this.getMinutes() } : { this.getSeconds() }</div>
        <hr className="separator"/>
        <div className="buttons-box">
          {this.StartStop()}
          <button className="button" onClick={ this.Reset }>Reset</button>
        </div>
        
      </div>
      
    );
  }
}


export default Counter;
