import React, { Component } from 'react';
import '../style/EditableLeadersList.css';

class EditableLeadersList extends Component {
    render() {
        const people = this.props.people;

        if (people.length > 0) {
            const selectedTeamMembers = people.filter(person => {
                return person.teamName === this.props.selected.team && person.leaderboardType === this.props.selected.type;
            });
            console.log(selectedTeamMembers);
            return (
                <div>
                    {
                        selectedTeamMembers.map(({departmentName, name, amountComplete}) =>
                            <div>
                                <span>{departmentName}</span>
                                <span>{name}</span>
                                <span>{amountComplete}</span>
                            </div>
                        )
                    }
                </div>
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