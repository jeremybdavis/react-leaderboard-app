import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'
import '../style/LeaderboardSelect.css';

class LeaderboardSelect extends Component {
    render() {
        const uniqueTeams = [...new Set(this.props.teams.map(team => team.teamName))];
        const teamList = uniqueTeams.map(team => ({
            value: team,
            text: team
        }));

        return (
            <Dropdown placeholder='Select Team' fluid selection options={teamList}/>
        );
    }
}

export default LeaderboardSelect;