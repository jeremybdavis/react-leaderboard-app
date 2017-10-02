import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

class LeaderForm extends Component {
    state = {
        fields: {
            teamName: '',
            departmentName: '',
            name: '',
            leaderboardType: '',
            amountComplete: 0
        },

        teams: [],
    }

    handleSubmit = (e) => {
        const teams = [
            ...this.state.teams,
            this.state.fields,
        ];

        this.setState({
            teams,
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

    handleChange = (e) => {
        const fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({ fields });
    }

    render() {
        return (
            <div className='ui centered card'>
                <div className='content'>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Input 
                                placeholder='Team Name' 
                                name='teamName'
                                value={this.state.fields.teamName}
                                onChange={this.handleChange}
                            />
                            <Form.Input 
                                placeholder='Name' 
                                name='name'
                                value={this.state.fields.name}
                                onChange={this.handleChange}
                            />
                            <Form.Input 
                                placeholder='Department Name' 
                                name='departmentName'
                                value={this.state.fields.departmentName}
                                onChange={this.handleChange}
                            />
                            <Form.Input 
                                placeholder='Leaderboard Type' 
                                name='leaderboardType'
                                value={this.state.fields.leaderboardType}
                                onChange={this.handleChange}
                            />
                            <Form.Input 
                                placeholder='Amount Completed' 
                                name='amountComplete'
                                value={this.state.fields.amountComplete}
                                onChange={this.handleChange}
                            />
                            <Form.Button content='Submit' />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        );
    }
}

export default LeaderForm;