import React, { Component } from 'react';
import LeaderForm from './LeaderForm.js';

class ToggleableLeadersForm extends Component {
    state = {
        isOpen: false,
    };

    handleFormOpen = () => {
        this.setState({ isOpen: true });
    };

    handleFormSubmit = (e) => {
        this.props.onFormSubmit(e);
        this.setState({
            isOpen: false
        });
    };

    handleFieldChange = (e) => {
        this.props.onFieldChange(e);
    }
    
    render() {
        if (this.state.isOpen) {
            return (
                <LeaderForm 
                    onFormSubmit={this.handleFormSubmit}
                    onFieldChange={this.handleFieldChange}
                    fields={this.props.fields}
                />
            );
        } else {
            return (
                <div className='ui basic content center aligned segment'>
                    <button
                        className='ui basic button icon'
                        onClick={this.handleFormOpen}
                    >
                        <i className='plus icon' />
                    </button>
                </div>
            )
        }
    }
}

export default ToggleableLeadersForm;