import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/navbar.css';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: false,
        };
    }

    toggleMenu = () => {
        this.setState((prevState) => ({
            showMenu: !prevState.showMenu,
        }));
    };

    render() {
        const { showMenu } = this.state;

        return (
            <nav>
                <div className={`nav-container ${showMenu ? 'active' : ''}`}>
                    <div className="nav-logo">
                        <NavLink to="/">
                            <img src="https://via.placeholder.com/150x50" alt="logo" />
                        </NavLink>
                    </div>
                    <div className="nav-toggle" onClick={this.toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`nav-links ${showMenu ? 'active' : ''}`}>
                        <NavLink to="/" className="nav-button">
                            Home
                        </NavLink>
                        <NavLink to="/news" className="nav-button">
                            News
                        </NavLink>
                        <div className="dropdown">
                            <NavLink to="/calculators/1" className="nav-button">
                                Calculators
                            </NavLink>
                            <div className="dropdown-content">
                                <NavLink to="/calculators/1">Calculator 1</NavLink>
                                <NavLink to="/calculators/2">Calculator 2</NavLink>
                                <NavLink to="/calculators/3">Calculator 3</NavLink>
                                <NavLink to="/calculators/4">Calculator 4</NavLink>
                            </div>
                        </div>
                        <NavLink to="/aboutus" className="nav-button">
                            About Us
                        </NavLink>
                        <NavLink to="/contactus" className="nav-button">
                            Contact Us
                        </NavLink>
                        <NavLink to="/login" className="nav-button">
                            Login
                        </NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
