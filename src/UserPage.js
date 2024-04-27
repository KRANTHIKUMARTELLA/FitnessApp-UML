import React, { useState } from 'react';
import axios from 'axios';
import './UserPage.css';

function UserPage() {
    const user = JSON.parse(localStorage.getItem('user'));
    const userName = user ? user.name : '';

    const [content, setContent] = useState('');

    const handleNavigationItemClick = (itemName) => {
        let newContent = '';
        switch (itemName) {
            case 'my-exercises':
                newContent = 'My Exercises content';
                break;
            case 'consult-trainer':
                newContent = (
                    <div>
                        <h2>Consult Trainer</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" />
                            </div>
                            <div>
                                <label htmlFor="exercise-type">Type of Exercise Required:</label>
                                <input type="text" id="exercise-type" name="exercise-type" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="health-issues">Health Issues:</label>
                                <div className="radio-container">
                                    <label htmlFor="yes">
                                        <input type="radio" id="yes" name="health-issues" value="Yes" />
                                            Yes
                                    </label>
                                    <label htmlFor="no">
                                        <input type="radio" id="no" name="health-issues" value="No" />
                                            No
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="contact-no">Contact Number:</label>
                                <input type="text" id="contact-no" name="contact-no" />
                            </div>
                            <button type="submit">Consult</button>
                        </form>
                    </div>
                );
                break;
            case 'set-reminders':
                newContent = 'Set Reminders content';
                break;
            case 'profile':
                newContent = (
                    <div>
                        <h2>Profile Details</h2>
                        <p><strong>Name: </strong>{user.name}</p>
                        <p><strong>Email: </strong> {user.email}</p>
                        <p><strong>Age: </strong> {user.age}</p>
                        <p><strong>Height: </strong>{user.height}</p>
                        <p><strong>Weight: </strong>{user.weight}</p>
                    </div>
                );
                break;
            default:
                newContent = '';
        }
        setContent(newContent);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            name: event.target.elements.name.value,
            exerciseType: event.target.elements['exercise-type'].value,
            healthIssues: event.target.elements['health-issues'].value,
            contactNo: event.target.elements['contact-no'].value,
        };

        try {
            const response = await axios.post('http://localhost:3001/consultations', formData);

            console.log('Consultation data submitted successfully:', response.data);

            setContent('Form submitted successfully');
            event.target.reset();
        } catch (error) {
            console.error('Error submitting consultation data:', error);
            setContent('Error submitting consultation data. Please try again later.');
        }
    };

    return (
        <div>
            <div className="user-page">
                <div className="left-navbar">
                    <ul>
                        <li onClick={() => handleNavigationItemClick('profile')}>Profile</li>
                        <li onClick={() => handleNavigationItemClick('my-exercises')}>My Exercises</li>
                        <li onClick={() => handleNavigationItemClick('consult-trainer')}>Consult Trainer</li>
                        <li onClick={() => handleNavigationItemClick('set-reminders')}>Set Reminders</li>
                    </ul>
                </div>
                <div className="center-content">
                    <h2>Welcome, {userName}!</h2>
                    <div className="content">{content}</div>
                </div>
            </div>
        </div>
    );
}

export default UserPage;