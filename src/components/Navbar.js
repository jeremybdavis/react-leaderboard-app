import React, { Component } from 'react';
import hcalogo from '../images/hcalogo.png'; 
import '../style/Navbar.css';
import NavbarButtons from './NavbarButtons.js';

class Navbar extends Component {
    render() {
        return(
            <nav>
                <img className="navbar-brand" src={hcalogo} alt="logo"/>
                <NavbarButtons types={this.props.types}/>
            </nav>
        );
    }
}

export default Navbar;