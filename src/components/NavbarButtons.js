import React, { Component } from 'react';
import '../style/NavbarButtons.css';

class NavbarButtons extends Component {
    onTypeButtonClick = (e) => {
        const btn = e.target;
        console.log(`${btn.type} is active`);
        this.props.onButtonClick(e);
    }
    render() {
        const listTypes = this.props.types;
        if (listTypes.length > 0) {
            const uniqueTypes = [...new Set(listTypes.map(item => item.leaderboardType))];

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
        } else {
            return (
                ''
            )
        }
    }
}

export default NavbarButtons;