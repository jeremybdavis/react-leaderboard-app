import React, { Component } from 'react';
import LeaderForm from './LeaderForm.js';

class ToggleableLeadersForm extends Component {
    state = {
        isOpen: false,
    };

    handleFormOpen = () => {
        this.setState({ isOpen: true });
    };
    
    render() {
        if (this.state.isOpen) {
            return (
                <LeaderForm />
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