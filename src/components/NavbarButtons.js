import React, { Component } from 'react';
import '../style/NavbarButtons.css';

class NavbarButtons extends Component {
    onTypeButtonClick = (e) => {
        const btn = e.target;
        console.log(`${btn.type} is active`);
        this.props.onButtonClick(e);
    }
    render() {
        const uniqueTypes = [...new Set(this.props.types.map(item => item.leaderboardType))];
        return (
            uniqueTypes.map((item, i) => 
                <li 
                    key={i}
                    type={item} 
                    className="nav-item"
                    onClick={this.onTypeButtonClick}
                >
                    {item}
                </li>
            )
        );
    }
}

export default NavbarButtons;