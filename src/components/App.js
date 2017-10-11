import React, { Component } from 'react';
import '../style/App.css';
import Navbar from './Navbar.js';
import LeaderboardSelect from './LeaderboardSelect.js';
import EditableLeadersList from './EditableLeadersList.js';
import ToggleableLeadersForm from './ToggleableLeadersForm.js';


class App extends Component {
  state = {
    fields: {
        teamName: '',
        departmentName: '',
        name: '',
        leaderboardType: '',
        amountComplete: 0
    },

    people: [],
  }

  handleCreateFormSubmit = (e) => {
    const people = [
        ...this.state.people,
        this.state.fields,
    ];

    // const newTeam = [
    //   ...this.state.teams,
    //   this.state.fields.teamName,
    // ]

    // const teams = [...new Set(newTeam)];

    this.setState({
        people,
        fields: {
            teamName: '',
            departmentName: '',
            name: '',
            leaderboardType: '',
            amountComplete: 0                
        }
    });
    e.preventDefault();
  };

  handleFieldChange = (e) => {
    const fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });    
  }

  render() {
    return (
      <div className="App">
        <Navbar types={this.state.people}/>
        <LeaderboardSelect teams={this.state.people}/>
        <EditableLeadersList 
          teams={this.state.people}
        />
        <ToggleableLeadersForm 
          onFormSubmit={this.handleCreateFormSubmit} 
          onFieldChange={this.handleFieldChange}
          fields={this.state.fields}
        />
      </div>
    );
  }
}

export default App;
