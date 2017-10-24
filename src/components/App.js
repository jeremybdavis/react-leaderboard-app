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

    selected: {
      team: '',
      type: '',
    }
  }

  handleCreateFormSubmit = (e) => {
    const people = [
        ...this.state.people,
        this.state.fields,
    ];

    const selected = this.state.selected;

    if(selected.type === '') {
      selected.type = this.state.fields.leaderboardType;
      this.setState({ selected });
    }

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

  // Set state for selected type 
  handleTypeChange = (e) => {
    const selected = this.state.selected;
    selected.type = e.target.type;
    this.setState({ selected });
  }

  // set state for selected team
  handleTeamSelect = (e) => {
    const selected = this.state.selected;
    selected.team = e.value;
    this.setState({ selected });
  }

  render() {
    return (
      <div className="App">
        <Navbar 
          types={this.state.people}
          selected={this.state.selected}
          onTypeSelect={this.handleTypeChange}
        />
        <LeaderboardSelect 
          teams={this.state.people}
          handleTeamSelect={this.handleTeamSelect}
        />
        <EditableLeadersList 
          people={this.state.people}
          selected={this.state.selected}
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
