// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NavigationBar.css'; // Import the CSS file for styling

// function NavigationBar() {
//     return (
//         <nav className="navbar">
//             <div className="navbar-container">
//                 <div className="nav-links">
//                     <Link to="/" className="nav-link">Home</Link>
//                     <Link to="/contact" className="nav-link">Contact Us</Link>
//                 </div>
//                 <div className="auth-links">
//                     <Link to="/login" className="auth-link">Login</Link>
//                     <Link to="/register" className="auth-link">Register</Link>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default NavigationBar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; // Import the CSS file for styling

function NavigationBar() {
    // State variable to track if the user is logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to handle user logout
    const handleLogout = () => {
        // Clear user data from local storage
        localStorage.removeItem('user');

        // Update state to reflect logout
        setIsLoggedIn(false);

        // Redirect to the home page (optional)
        window.location.href = '/';
    };

    // Check local storage to determine if the user is logged in
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                </div>
                <div className="auth-links">
                    {isLoggedIn ? (
                        // Show "Logout" button when user is logged in
                        <button className="auth-link" onClick={handleLogout}>Logout</button>
                    ) : (
                        // Show "Login" and "Register" links when user is not logged in
                        <>
                            <Link to="/login" className="auth-link">Login</Link>
                            <Link to="/register" className="auth-link">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;


