import React, { Component } from 'react';
import './App.css';
import HeaderBar from './shared/HeaderBar';
import {MATCHES} from './data/matches';
import Scoreboard from './components/scoreboard/Scoreboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches:MATCHES
    }
  }
  render() {
   

    return (
      <div id="rootFrame">
        <HeaderBar></HeaderBar>
        <Scoreboard matches={this.state.matches}></Scoreboard>
      </div>
    );
  }
}

export default App;
