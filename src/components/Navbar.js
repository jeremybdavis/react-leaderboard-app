import React, { Component } from 'react';
import hcalogo from '../images/hcalogo.png'; 
import '../style/Navbar.css';
import NavbarButtons from './NavbarButtons.js';

class Navbar extends Component {
    render() {
        return(
            <nav>
                <img className="navbar-brand" src={hcalogo} alt="logo"/>
                <NavbarButtons />
            </nav>
        );
    }
}

export default Navbar;