import React, { Component } from 'react';
import '../style/EditableLeadersList.css';

class EditableLeadersList extends Component {
    render() {
        const teams = this.props.teams;

        if (teams.length > 0) {
            return (
                <div>Leaders List</div>
            )
        } else {
            return (
                <div className='alert'>
                    <span>No teams exist, please add one by clicking on the plus icon below.</span>
                </div>
            )
        }
    }
}

export default EditableLeadersList;