import React from 'react';
import './ContactUs.css'; // Import CSS file for ContactUs component styling

function ContactUs() {
    return (
        <div className="contact-us-container">
            <div className="contact-us-content">
                <h2>Contact Us</h2>
                <p>For inquiries, please email us at <a href="mailto:contact@fitnessapp.com">contact@fitnessapp.com</a>.</p>
                <div className="contact-form">
                    <h3>Send Us a Message</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
