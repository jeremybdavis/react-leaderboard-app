import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'
import '../style/LeaderboardSelect.css';

class LeaderboardSelect extends Component {
    onSelectTeam = (e, data) => {
        const team = e.target.value;
        console.log(data.value);
        this.props.handleTeamSelect(data);
    }

    render() {
        const uniqueTeams = [...new Set(this.props.teams.map(team => team.teamName))];
        const teamList = uniqueTeams.map(team => ({
            value: team,
            text: team
        }));

        return (
            <Dropdown placeholder='Select Team' fluid selection options={teamList} onChange={this.onSelectTeam}/>
        );
    }
}

export default LeaderboardSelect;