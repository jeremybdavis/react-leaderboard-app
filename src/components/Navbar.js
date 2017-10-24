import React, { Component } from 'react';
import hcalogo from '../images/hcalogo.png'; 
import '../style/Navbar.css';
import NavbarButtons from './NavbarButtons.js';

class Navbar extends Component {
    onTypeClick = (e) => {
        this.props.onTypeSelect(e);
    }
    render() {
        return(
            <nav>
                <img className="navbar-brand" src={hcalogo} alt="logo"/>
                <div className="navbar-collapse">
                    <ul className="navbar-nav">
                        <NavbarButtons 
                            types={this.props.types}
                            selected={this.props.selected}
                            onButtonClick={this.onTypeClick}
                        />
                    </ul>
                </div>
                
            </nav>
        );
    }
}

export default Navbar;