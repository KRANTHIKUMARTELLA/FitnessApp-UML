import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; // Import the CSS file for styling

function NavigationBar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                </div>
                <div className="auth-links">
                    <Link to="/login" className="auth-link">Login</Link>
                    <Link to="/register" className="auth-link">Register</Link>
                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;

