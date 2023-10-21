import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

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
                    <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
                        <li class="lilly">
                            <NavLink to="/" className="nav-button">
                                Home
                            </NavLink>
                        </li>
                        <li class="lilly">
                            <NavLink to="/news" className="nav-button">
                                News
                            </NavLink>
                        </li>
                        <li className="dropdown">
                            <NavLink to="/calculators/1" className="nav-button">
                                Calculators
                            </NavLink>
                            <ul className="dropdown-content">
                                <li class="lilly dropdown-button">
                                    <NavLink to="/calculators/1" class="dropdown-button">Calculator Gross/Net</NavLink>
                                </li>
                                <li class="lilly dropdown-button">
                                    <NavLink to="/calculators/2" class="dropdown-button">Calculator Vat</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li class="lilly">
                            <NavLink to="/aboutus" className="nav-button">
                                About Us
                            </NavLink>
                        </li>
                        <li class="lilly">
                            <NavLink to="/contactus" className="nav-button">
                                Contact Us
                            </NavLink>
                        </li>


                        {/* Mobile Navigation Toggle */}
                        {showMenu && (
                            <li className="nav-toggle-mobile" onClick={this.toggleMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
