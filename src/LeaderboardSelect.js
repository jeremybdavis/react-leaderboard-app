import React, { Component } from 'react';
import { Select } from 'semantic-ui-react';

class LeaderboardSelect extends Component {
    render() {
        const teams = this.props.teams;
        return (
            <Select placeholder='Select Team' options={teams}/>
        );
    }
}

export default LeaderboardSelect;