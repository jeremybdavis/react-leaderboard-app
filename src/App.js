import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import LeaderboardSelect from './LeaderboardSelect.js';

class App extends Component {
  state = {
    teams: []
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <LeaderboardSelect 
          teams={this.state.teams}
        />
      </div>
    );
  }
}

export default App;
