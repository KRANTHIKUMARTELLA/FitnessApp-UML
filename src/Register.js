// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     const handleRegister = async (event) => {
//         event.preventDefault();

//         try {
//             // Make a POST request to register the user
//             const response = await axios.post('http://localhost:3001/users', {
//                 email,
//                 password,
//             });

//             // Handle successful registration
//             if (response.status === 201) {
//                 console.log('Registration successful!', response.data);
//                 // Redirect to login page or other appropriate page
//                 navigate('/login');
//             }
//         } catch (error) {
//             // Handle registration error
//             console.error('Registration failed:', error);
//             setError('Failed to register. Please try again.');
//         }
//     };

//     return (
//         <div>
//             <h2>Register</h2>
//             <form onSubmit={handleRegister}>
//                 <div>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// }

// export default Register;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Register.css';

// function Register() {
//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');
//     const [height, setHeight] = useState('');
//     const [weight, setWeight] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState(null);
//     const [successMessage, setSuccessMessage] = useState(null);
//     const navigate = useNavigate();

//     const handleRegister = async (event) => {
//         event.preventDefault();

//         try {
//             // Make a POST request to register the user
//             const response = await axios.post('http://localhost:3001/users', {
//                 name,
//                 age,
//                 height,
//                 weight,
//                 email,
//                 password
//             });

//             // Handle successful registration
//             if (response.status === 201) {
//                 console.log('Registration successful!', response.data);
//                 setSuccessMessage('Registration successful! Your user ID: ${response.data.id}');
//                 // Clear form fields
//                 setName('');
//                 setAge('');
//                 setHeight('');
//                 setWeight('');
//                 setEmail('');
//                 setPassword('');
//                 setConfirmPassword('');
//             }
//         } catch (error) {
//             // Handle registration error
//             console.error('Registration failed:', error);
//             setError('Failed to register. Please try again.');
//         }
//     };

//     return (
//         <div className="register-container">
//             {successMessage ? (
//                 <div>
//                     <p className="success-message">{successMessage}</p>
//                     <p>Click <a href="/login">here</a> to login</p>
//                 </div>
//             ) : (
//                 <div>
//                     <h2>Register</h2>
//                     <form onSubmit={handleRegister} className="register-form">
//                         <div className="form-group">
//                             <label>Name:</label>
//                             <input
//                                 type="text"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label>Age:</label>
//                             <input
//                                 type="number"
//                                 value={age}
//                                 onChange={(e) => setAge(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label>Height:</label>
//                             <input
//                                 type="number"
//                                 value={height}
//                                 onChange={(e) => setHeight(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label>Weight:</label>
//                             <input
//                                 type="number"
//                                 value={weight}
//                                 onChange={(e) => setWeight(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label>Email:</label>
//                             <input
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label>Password:</label>
//                             <input
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label>Confirm Password:</label>
//                             <input
//                                 type="password"
//                                 value={confirmPassword}
//                                 onChange={(e) => setConfirmPassword(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         {error && <p className="error-message">{error}</p>}
//                         <button type="submit" className="register-button">Register</button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Register;

// the above code has register page working without status

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();

        // Create the new user object with the status field set to 'grant'
        const newUser = {
            name,
            age,
            height,
            weight,
            email,
            password,
            status: 'grant' // Set the status field to 'grant'
        };

        // Make a POST request to register the user
        try {
            const response = await axios.post('http://localhost:3001/users', newUser);

            // Handle successful registration
            if (response.status === 201) {
                console.log('Registration successful!', response.data);
                setSuccessMessage(`Registration successful! Your user ID: ${response.data.id}`);
                
                // Clear form fields
                setName('');
                setAge('');
                setHeight('');
                setWeight('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            }
        } catch (error) {
            // Handle registration error
            console.error('Registration failed:', error);
            setError('Failed to register. Please try again.');
        }
    };

    return (
        <div className="register-container">
            {successMessage ? (
                <div>
                    <p className="success-message">{successMessage}</p>
                    <p>Click <a href="/login">here</a> to login</p>
                </div>
            ) : (
                <div>
                    <h2>Register</h2>
                    <form onSubmit={handleRegister} className="register-form">
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Age:</label>
                            <input
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label>Height:</label>
                            <input
                                type="number"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label>Weight:</label>
                            <input
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label>Confirm Password:</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" className="register-button">Register</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Register;

