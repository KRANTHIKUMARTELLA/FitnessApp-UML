import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();

        try {
            // Make a POST request to register the user
            const response = await axios.post('http://localhost:3001/users', {
                email,
                password,
            });

            // Handle successful registration
            if (response.status === 201) {
                console.log('Registration successful!', response.data);
                // Redirect to login page or other appropriate page
                navigate('/login');
            }
        } catch (error) {
            // Handle registration error
            console.error('Registration failed:', error);
            setError('Failed to register. Please try again.');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
