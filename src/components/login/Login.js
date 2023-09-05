import React, { Component } from 'react';
import './login.css';

class LoginObject extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
    }

    handleInputChange = (e) => {
        // Update the state when input fields change
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();

        // Store the username and password in localStorage
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);

        // Print them to the console
        console.log('Username:', this.state.username);
        console.log('Password:', this.state.password);
    };

    render() {
        return (
            <div className="login-container">
                <div className="login-form-container">
                    <form className="login-form" onSubmit={this.handleFormSubmit}>
                        <h1>Login</h1>
                        <div className="login-form-input">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                onChange={this.handleInputChange}
                                value={this.state.username}
                            />
                        </div>
                        <div className="login-form-input">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={this.handleInputChange}
                                value={this.state.password}
                            />
                        </div>
                        <div className="login-form-input">
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginObject;
