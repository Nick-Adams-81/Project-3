import React, { Component } from 'react';
import Clock from 'react-clock';
import './style.css'

class MyClock extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  render() {
    return (
      <div className="clock">
        <p className="title">Current Time:</p>
        <Clock
          value={this.state.date}
        />
      </div>
    );
  }
}


export default MyClock;