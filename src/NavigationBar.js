


// export default NavigationBar;
// this jus accepts admin page and create a manage button

// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import './NavigationBar.css'; // Import the CSS file for styling

// function NavigationBar() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [isAdmin, setIsAdmin] = useState(false); // State to track if the user is an admin
//     const location = useLocation();
//     const navigate = useNavigate();

//     // Function to handle user logout
//     const handleLogout = () => {
//         // Clear user data from local storage
//         localStorage.removeItem('user');
//         localStorage.removeItem('isAdmin'); // Remove admin flag from local storage

//         // Update state to reflect logout
//         setIsLoggedIn(false);
//         setIsAdmin(false);

//         // Redirect to the home page
//         navigate('/');
//     };

//     const handleManageUserClick = () => {
//         navigate('/admin');
//     };

//     // Check local storage to determine if the user is logged in and if they are an admin
//     useEffect(() => {
//         const user = JSON.parse(localStorage.getItem('user'));
//         const adminFlag = JSON.parse(localStorage.getItem('isAdmin')); // Check if the user is an admin

//         setIsLoggedIn(!!user);
//         setIsAdmin(!!adminFlag); // Update isAdmin state based on the admin flag

//     }, [location]);

//     return (
//         <nav className="navbar">
//             <div className="navbar-container">
//                 <div className="nav-links">
//                     <Link to="/" className="nav-link">Home</Link>
//                     <Link to="/contact" className="nav-link">Contact Us</Link>

//                     {/* Render "Manage User" button if the user is an admin */}
//                     {isAdmin && <Link to="/manage-user" className="nav-link">Manage User</Link>}
//                 </div>

//                 <div className="auth-links">
//                     {isLoggedIn ? (
//                         // Show "Logout" button when user is logged in
//                         <button className="auth-link" onClick={handleLogout}>Logout</button>
//                     ) : (
//                         // Show "Login" and "Register" links when user is not logged in
//                         <>
//                             <Link to="/login" className="auth-link">Login</Link>
//                             <Link to="/register" className="auth-link">Register</Link>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default NavigationBar;

// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import './NavigationBar.css'; // Import the CSS file for styling

// function NavigationBar() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [isAdmin, setIsAdmin] = useState(false); // State to track if the user is an admin
//     const location = useLocation();
//     const navigate = useNavigate();

//     // Function to handle user logout
//     const handleLogout = () => {
//         // Clear user data from local storage
//         localStorage.removeItem('user');
//         localStorage.removeItem('isAdmin'); // Remove admin flag from local storage

//         // Update state to reflect logout
//         setIsLoggedIn(false);
//         setIsAdmin(false);

//         // Redirect to the home page
//         navigate('/');
//     };

//     // Function to handle navigation to the Manage User page
//     const handleManageUserClick = () => {
//         navigate('/admin');
//     };

//     // Check local storage to determine if the user is logged in and if they are an admin
//     useEffect(() => {
//         const user = JSON.parse(localStorage.getItem('user'));
//         const adminFlag = JSON.parse(localStorage.getItem('isAdmin')); // Check if the user is an admin

//         setIsLoggedIn(!!user);
//         setIsAdmin(!!adminFlag); // Update isAdmin state based on the admin flag

//     }, [location]);

//     return (
//         <nav className="navbar">
//             <div className="navbar-container">
//                 <div className="nav-links">
//                     <Link to="/" className="nav-link">Home</Link>
//                     <Link to="/contact" className="nav-link">Contact Us</Link>

//                     {/* Render "Manage User" button if the user is an admin */}
//                     {isAdmin && (
//                         <button className="auth-link" onClick={handleManageUserClick}>Manage User</button>
//                     )}
//                 </div>

//                 <div className="auth-links">
//                     {isLoggedIn ? (
//                         // Show "Logout" button when user is logged in
//                         <button className="auth-link" onClick={handleLogout}>Logout</button>
//                     ) : (
//                         // Show "Login" and "Register" links when user is not logged in
//                         <>
//                             <Link to="/login" className="auth-link">Login</Link>
//                             <Link to="/register" className="auth-link">Register</Link>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default NavigationBar;

// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import './NavigationBar.css'; // Import the CSS file for styling

// function NavigationBar() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [isAdmin, setIsAdmin] = useState(false); // State to track if the user is an admin
//     const [isPersonalTrainer, setIsPersonalTrainer] = useState(false); // State to track if the user is a personal trainer
//     const location = useLocation();
//     const navigate = useNavigate();

//     // Function to handle user logout
//     const handleLogout = () => {
//         // Clear user data from local storage
//         localStorage.removeItem('user');
//         localStorage.removeItem('isAdmin');
//         localStorage.removeItem('isPersonalTrainer');

//         // Update state to reflect logout
//         setIsLoggedIn(false);
//         setIsAdmin(false);
//         setIsPersonalTrainer(false);

//         // Redirect to the home page
//         navigate('/');
//     };

//     // Function to handle navigation to the Manage User page
//     const handleManageUserClick = () => {
//         navigate('/admin');
//     };

//     // Function to handle navigation to the Personal Trainer page
//     const handlePersonalTrainerClick = () => {
//         navigate('/personal-trainer'); // Example: Redirect to the personal trainer's specific page
//     };

//     // Check local storage to determine if the user is logged in and their role (admin, personal trainer)
//     useEffect(() => {
//         const user = JSON.parse(localStorage.getItem('user'));
//         const isAdminFlag = JSON.parse(localStorage.getItem('isAdmin'));
//         const isPersonalTrainerFlag = JSON.parse(localStorage.getItem('isPersonalTrainer'));

//         setIsLoggedIn(!!user);
//         setIsAdmin(!!isAdminFlag);
//         setIsPersonalTrainer(!!isPersonalTrainerFlag);
//     }, [location]);

//     return (
//         <nav className="navbar">
//             <div className="navbar-container">
//                 <div className="nav-links">
//                     <Link to="/" className="nav-link">Home</Link>
//                     <Link to="/contact" className="nav-link">Contact Us</Link>

//                     {/* Render "Manage User" button if the user is an admin */}
//                     {isAdmin && (
//                         <button className="auth-link" onClick={handleManageUserClick}>Manage User</button>
//                     )}

//                     {/* Render "Personal Trainer" button if the user is a personal trainer */}
//                     {isPersonalTrainer && (
//                         <button className="auth-link" onClick={handlePersonalTrainerClick}>
//                             Clients
//                         </button>
//                     )}
//                 </div>

//                 <div className="auth-links">
//                     {isLoggedIn ? (
//                         // Show "Logout" button when user is logged in
//                         <button className="auth-link" onClick={handleLogout}>Logout</button>
//                     ) : (
//                         // Show "Login" and "Register" links when user is not logged in
//                         <>
//                             <Link to="/login" className="auth-link">Login</Link>
//                             <Link to="/register" className="auth-link">Register</Link>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default NavigationBar;

// the above code works

import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './NavigationBar.css'; // Import the CSS file for styling

function NavigationBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isPersonalTrainer, setIsPersonalTrainer] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Function to handle user logout
    const handleLogout = () => {
        // Clear user data from local storage
        localStorage.removeItem('user');
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('isPersonalTrainer');

        // Update state to reflect logout
        setIsLoggedIn(false);
        setIsAdmin(false);
        setIsPersonalTrainer(false);

        // Redirect to the home page
        navigate('/');
    };

    // Function to handle navigation to the Manage User page
    const handleManageUserClick = () => {
        navigate('/admin');
    };

    // Function to handle navigation to the Personal Trainer page
    const handlePersonalTrainerClick = () => {
        navigate('/personal-trainer'); // Redirect to the personal trainer's specific page
    };

    // Check local storage to determine if the user is logged in and their role (admin, personal trainer)
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        const isAdminFlag = JSON.parse(localStorage.getItem('isAdmin'));
        const isPersonalTrainerFlag = JSON.parse(localStorage.getItem('isPersonalTrainer'));

        setIsLoggedIn(!!user);
        setIsAdmin(!!isAdminFlag);
        setIsPersonalTrainer(!!isPersonalTrainerFlag);
    }, [location]);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link>

                    {isLoggedIn && (
                        <Link to="/openchat" className="nav-link">OpenAI Chat</Link>
                    )}

                    {/* Render "Manage User" button if the user is an admin */}
                    {isAdmin && (
                        <button className="auth-link" onClick={handleManageUserClick}>
                            Manage User
                        </button>
                    )}

                    {/* Render "Personal Trainer" button if the user is a personal trainer */}
                    {isPersonalTrainer && (
                        <button className="auth-link" onClick={handlePersonalTrainerClick}>
                            Clients
                        </button>
                    )}
                </div>

                <div className="auth-links">
                    {isLoggedIn ? (
                        // Show "Logout" button when user is logged in
                        
                        <button className="auth-link" onClick={handleLogout}>
                            Logout
                        </button>
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


