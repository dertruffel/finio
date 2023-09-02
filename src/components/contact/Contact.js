import React, { Component } from 'react';
import './contact.css';

class ContactObject extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: '',
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

        // Store the name, email, and message in localStorage
        localStorage.setItem('name', this.state.name);
        localStorage.setItem('email', this.state.email);
        localStorage.setItem('message', this.state.message);

        // Print them to the console
        console.log('Name:', this.state.name);
        console.log('Email:', this.state.email);
        console.log('Message:', this.state.message);
    };

    render() {
        return (
            <div className="contact-container">
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={this.handleFormSubmit}>
                        <h1>Contact Us</h1>
                        <div className="contact-form-input">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={this.handleInputChange}
                                value={this.state.name}
                            />
                        </div>
                        <div className="contact-form-input">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={this.handleInputChange}
                                value={this.state.email}
                            />
                        </div>
                        <div className="contact-form-input">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                onChange={this.handleInputChange}
                                value={this.state.message}
                            />
                        </div>
                        <div className="contact-form-input">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactObject;