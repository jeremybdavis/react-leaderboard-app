import React, { Component } from 'react';
import '../style/NavbarButtons.css';

class NavbarButtons extends Component {
    render() {
        const uniqueTypes = [...new Set(this.props.types.map(item => item.leaderboardType))];
        return (
            <div className="navbar-collapse">
                <ul className="navbar-nav">
                    { uniqueTypes.map((item, i) => 
                        <li key={i} className="nav-item">{item}</li>
                    )}
                </ul>
            </div>

        );
    }
}

export default NavbarButtons;