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
        const teamNames = this.props.teams;
        if (teamNames.length > 0) {
            const uniqueTeams = [...new Set(teamNames.map(team => team.teamName))];
            const teamList = uniqueTeams.map(team => ({
                value: team,
                text: team
            }));
    
            return (
                <Dropdown placeholder='Select Team' fluid selection options={teamList} onChange={this.onSelectTeam}/>
            );
        } else {
            return (
                ''
            );
        }
    }
}

export default LeaderboardSelect;