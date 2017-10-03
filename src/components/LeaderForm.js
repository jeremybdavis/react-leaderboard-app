import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import '../style/LeaderForm.css';

class LeaderForm extends Component {

    handleSubmit = (e) => {
        this.props.onFormSubmit(e);
    };

    handleChange = (e) => {
        this.props.onFieldChange(e);
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
                                value={this.props.fields.teamName}
                                onChange={this.handleChange}
                            />
                            <Form.Input 
                                placeholder='Name' 
                                name='name'
                                value={this.props.fields.name}
                                onChange={this.handleChange}
                            />
                            <Form.Input 
                                placeholder='Department Name' 
                                name='departmentName'
                                value={this.props.fields.departmentName}
                                onChange={this.handleChange}
                            />
                            <Form.Input 
                                placeholder='Leaderboard Type' 
                                name='leaderboardType'
                                value={this.props.fields.leaderboardType}
                                onChange={this.handleChange}
                            />
                            <Form.Input 
                                placeholder='Amount Completed' 
                                name='amountComplete'
                                value={this.props.fields.amountComplete}
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