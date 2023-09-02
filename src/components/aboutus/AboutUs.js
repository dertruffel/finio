import React, { Component } from 'react';
import './aboutus.css';

class AboutUsObject extends Component {
    render() {
        return (
            <div className="aboutus-container">
                <div className="aboutus-content">
                    <h1>About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        consectetur, velit eu aliquet fermentum, odio velit rutrum
                        sapien, eget consequat velit magna eu ipsum. Sed nec arcu
                        aliquet, aliquam nunc quis, aliquam odio. Duis sed ipsum
                        vehicula, aliquam nunc quis, aliquam odio. Duis sed ipsum
                        vehicula, aliquam nunc quis, aliquam odio.
                    </p>
                    <img
                        src="https://via.placeholder.com/200x150"
                        alt="Placeholder Image 1"
                        className="aboutus-image"
                    />
                    <img
                        src="https://via.placeholder.com/200x150"
                        alt="Placeholder Image 2"
                        className="aboutus-image"
                    />
                    <img
                        src="https://via.placeholder.com/200x150"
                        alt="Placeholder Image 3"
                        className="aboutus-image"
                    />
                </div>
            </div>
        );
    }
}

export default AboutUsObject;
