// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './LoginPage.css'; // Import the CSS file for styling

// function LoginPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState(null);

//     const handleLogin = async (event) => {
//         event.preventDefault();

//         try {
//             // Make a POST request to authenticate the user
//             const response = await axios.post('http://localhost:3001/auth/login', {
//                 email,
//                 password,
//             });

//             // Handle successful login
//             if (response.status === 200) {
//                 console.log('Login successful!', response.data);
//                 // You can handle successful login here, e.g., saving token or redirecting
//             }
//         } catch (error) {
//             // Handle authentication error
//             console.error('Login failed:', error);
//             // console.log('Login successful!', email,password);
//             setError('Invalid email or password.');
//         }
//     };

// function LoginPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState(null);

//     const handleLogin = async (event) => {
//         event.preventDefault();

//         try {
//             // Fetch all users from the JSON Server
//             const response = await axios.get('http://localhost:3001/users');
//             console.log('Response data:', response.data);
//             const users = response.data;


//             // Check the provided email and password against the list of users
//             const user = users.find((user) => user.email === email && user.password === password);

//             if (user) {
//                 // Handle successful login
//                 console.log('Login successful!', user);
//                 // You can save the user data to local storage, or redirect to another page, etc.
//                 // For example:
//                 localStorage.setItem('user', JSON.stringify(user));
//                 // Redirect to another page (e.g., home page)
//                 window.location.href = '/user';
//                 //navigate('/');
//             } else {
//                 // Handle failed login
//                 setError('Invalid email or password.');
//             }
//         } catch (error) {
//             // Handle other errors (e.g., network issues)
//             console.error('Login failed:', error);
//             setError('An error occurred during login. Please try again later.');
//         }
//     };


//     return (
//         <div className="login-page">
//             <h2>Login</h2>
//             <form onSubmit={handleLogin} className="login-form">
//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 {error && <p className="error-message">{error}</p>}
//                 <button type="submit" className="login-button">Login</button>
//             </form>
//         </div>
//     );
// }

// export default LoginPage;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './LoginPage.css';

// function LoginPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     // Admin credentials
//     const adminEmail = 'admin@gmail.com';
//     const adminPassword = '1234';

//     const handleLogin = async (event) => {
//         event.preventDefault();

//         try {
//             // Fetch all users from the JSON server
//             const response = await axios.get('http://localhost:3001/users');
//             console.log('Response data:', response.data);
//             const users = response.data;

//             // Check the provided email and password against the list of users
//             const user = users.find((user) => user.email === email && user.password === password);

//             if (user) {

//                 if (user.status !== 'grant') {
//                     setError('Please contact the administrator for access.');
//                     return;
//                 }
//                 // Handle successful login
//                 console.log('Login successful!', user);

//                 // Save user data to local storage
//                 localStorage.setItem('user', JSON.stringify(user));

//                 // Check if the user is an admin
//                 const isAdmin = email === adminEmail && password === adminPassword;
//                 localStorage.setItem('isAdmin', isAdmin);

//                 // Redirect based on whether the user is an admin or not
//                 if (isAdmin) {
//                     // Redirect to home page for admin users
//                     navigate('/');
//                 } else {
//                     // Redirect to user page for non-admin users
//                     navigate('/user');
//                 }
//             } else {
//                 // Handle failed login
//                 setError('Invalid email or password.');
//             }
//         } catch (error) {
//             // Handle other errors (e.g., network issues)
//             console.error('Login failed:', error);
//             setError('An error occurred during login. Please try again later.');
//         }
//     };

//     return (
//         <div className="login-page">
//             <h2>Login</h2>
//             <form onSubmit={handleLogin} className="login-form">
//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 {error && <p className="error-message">{error}</p>}
//                 <button type="submit" className="login-button">Login</button>
//             </form>
//         </div>
//     );
// }

// export default LoginPage;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Admin and Personal Trainer credentials
    const adminEmail = 'admin@gmail.com';
    const adminPassword = '1234';
    const personalTrainerEmail = 'personaltrainer@gmail.com';
    const personalTrainerPassword = '1234';

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            // Fetch all users from the JSON server
            const response = await axios.get('http://localhost:3001/users');
            console.log('Response data:', response.data);
            const users = response.data;

            // Check the provided email and password against the list of users
            const user = users.find((user) => user.email === email && user.password === password);

            if (user) {
                // Check if the user's status is granted
                if (user.status !== 'grant') {
                    setError('Please contact the administrator for access.');
                    return;
                }

                // Handle successful login
                console.log('Login successful!', user);

                // Save user data to local storage
                localStorage.setItem('user', JSON.stringify(user));

                // Check if the user is an admin
                const isAdmin = email === adminEmail && password === adminPassword;
                localStorage.setItem('isAdmin', isAdmin);

                // Check if the user is a personal trainer
                const isPersonalTrainer = email === personalTrainerEmail && password === personalTrainerPassword;
                localStorage.setItem('isPersonalTrainer', isPersonalTrainer);

                // Redirect based on whether the user is an admin or personal trainer
                if (isAdmin) {
                    // Redirect to home page for admin users
                    navigate('/');
                } else if (isPersonalTrainer) {
                    // Redirect to home page for personal trainer users
                    navigate('/');
                } else {
                    // Redirect to user page for non-admin, non-personal trainer users
                    navigate('/user');
                }
            } else {
                // Handle failed login
                setError('Invalid email or password.');
            }
        } catch (error) {
            // Handle other errors (e.g., network issues)
            console.error('Login failed:', error);
            setError('An error occurred during login. Please try again later.');
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;



