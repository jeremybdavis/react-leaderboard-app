import React, { Component } from 'react';

class EditableLeadersList extends Component {
    render() {
        const teams = this.props.teams;
        return (
            <span className='alert'>
                {teams.length > 0 ? '' : 'No teams exist, please add one.'}
            </span>
        );
    }
}

export default EditableLeadersList;