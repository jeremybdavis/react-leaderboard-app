import React, { Component } from 'react';
import '../style/App.css';
import Navbar from './Navbar.js';
import LeaderboardSelect from './LeaderboardSelect.js';
import EditableLeadersList from './EditableLeadersList.js';
import ToggleableLeadersForm from './ToggleableLeadersForm.js';


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
        <EditableLeadersList 
          teams={this.state.teams}
        />
        <ToggleableLeadersForm />
      </div>
    );
  }
}

export default App;
