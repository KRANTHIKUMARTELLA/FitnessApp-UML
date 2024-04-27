// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './UserPage.css';

// function UserPage() {
//     const user = JSON.parse(localStorage.getItem('user'));
//     const userId = user ? user.id : null;
//     const userName = user ? user.name : '';

//     const [content, setContent] = useState('');

//     const handleNavigationItemClick = async (itemName) => {
//         let newContent = '';
//         switch (itemName) {
//             case 'my-exercises':
//                 // Fetch user's workout data from the JSON server
//                 if (userId) {
//                     try {
//                         const response = await axios.get(`http://localhost:3001/users/${userId}`);
//                         const userData = response.data;

//                         // Check if the user has a workout field
//                         if (userData.workout && userData.workout.length > 0) {
//                             console.log('User workout data:', userData.workout);
//                             // Add code here to render workout data as required
//                             newContent = (
//                                 <div>
//                                     <h2>My Exercises</h2>
//                                     <ul>
//                                         {userData.workout.map((workout, index) => (
//                                             <li key={index}>
//                                                 <p><strong>Muscle:</strong> {workout.workoutName1}</p>                                               
//                                                 <p><strong>Workout Name 1:</strong> {workout.workoutName1}</p>
//                                                 <p><strong>Workout Name 2:</strong> {workout.workoutName2}</p>
//                                                 <p><strong>Reps:</strong> {workout.reps}</p>
//                                                 <p><strong>Weight:</strong> {workout.weight}</p>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             );
//                         } else {
//                             console.log('No workout data found for the user.');
//                             newContent = 'No workout data found for the user.';
//                         }
//                     } catch (error) {
//                         console.error('Error fetching user data:', error);
//                         newContent = 'Error fetching workout data. Please try again later.';
//                     }
//                 } else {
//                     newContent = 'User not logged in.';
//                 }
//                 break;
//             case 'consult-trainer':
//                 newContent = (
//                     <div>
//                         <h2>Consult Trainer</h2>
//                         <form onSubmit={handleSubmit}>
//                             <div>
//                                 <label htmlFor="name">Name:</label>
//                                 <input type="text" id="name" name="name" />
//                             </div>
//                             <div>
//                                 <label htmlFor="exercise-type">Type of Exercise Required:</label>
//                                 <input type="text" id="exercise-type" name="exercise-type" />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="health-issues">Health Issues:</label>
//                                 <div className="radio-container">
//                                     <label htmlFor="yes">
//                                         <input type="radio" id="yes" name="health-issues" value="Yes" />
//                                             Yes
//                                     </label>
//                                     <label htmlFor="no">
//                                         <input type="radio" id="no" name="health-issues" value="No" />
//                                             No
//                                     </label>
//                                 </div>
//                             </div>

//                             <div>
//                                 <label htmlFor="contact-no">Contact Number:</label>
//                                 <input type="text" id="contact-no" name="contact-no" />
//                             </div>
//                             <button type="submit">Consult</button>
//                         </form>
//                     </div>
//                 );
//                 break;
            
//                 case 'log-data':
//                     newContent = (
//                         <div>
//                             <h2>Log Data</h2>
//                             <form >
//                                 <div>
//                                     <label htmlFor="effort-level">Effort Level:</label>
//                                     <select id="effort-level" name="effort-level" required>
//                                         <option value="beginner">Beginner</option>
//                                         <option value="moderate">Moderate</option>
//                                         <option value="advanced">Advanced</option>
//                                     </select>
//                                 </div>
//                                 <div>
//                                     <label htmlFor="reps">Number of Reps:</label>
//                                     <input type="number" id="reps" name="reps" required />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="target-muscle">Target Muscle:</label>
//                                     <input type="text" id="target-muscle" name="target-muscle" required />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="duration">Duration:</label>
//                                     <input type="text" id="duration" name="duration" required />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="calories-burnt">Number of Calories Burnt:</label>
//                                     <input type="number" id="calories-burnt" name="calories-burnt" required />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="date">Date:</label>
//                                     <input type="date" id="date" name="date" required />
//                                 </div>
//                                 <button type="submit">Submit</button>
//                             </form>
//                         </div>
//                     );
//                     break;                
//             case 'profile':
//                 newContent = (
//                     <div>
//                         <h2>Profile Details</h2>
//                         <p><strong>Name: </strong>{user.name}</p>
//                         <p><strong>Email: </strong> {user.email}</p>
//                         <p><strong>Age: </strong> {user.age}</p>
//                         <p><strong>Height: </strong>{user.height}</p>
//                         <p><strong>Weight: </strong>{user.weight}</p>
//                     </div>
//                 );
//                 break;
//             default:
//                 newContent = '';
//         }
//         setContent(newContent);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const formData = {
//             name: event.target.elements.name.value,
//             exerciseType: event.target.elements['exercise-type'].value,
//             healthIssues: event.target.elements['health-issues'].value,
//             contactNo: event.target.elements['contact-no'].value,
//         };

//         try {
//             const response = await axios.post('http://localhost:3001/consultations', formData);

//             console.log('Consultation data submitted successfully:', response.data);

//             setContent('Form submitted successfully');
//             event.target.reset();
//         } catch (error) {
//             console.error('Error submitting consultation data:', error);
//             setContent('Error submitting consultation data. Please try again later.');
//         }
//     };

//     return (
//         <div>
//             <div className="user-page">
//                 <div className="left-navbar">
//                     <ul>
//                         <li onClick={() => handleNavigationItemClick('profile')}>Profile</li>
//                         <li onClick={() => handleNavigationItemClick('my-exercises')}>My Exercises</li>
//                         <li onClick={() => handleNavigationItemClick('consult-trainer')}>Consult Trainer</li>
//                         <li onClick={() => handleNavigationItemClick('log-data')}>Set Reminders</li>
//                     </ul>
//                 </div>
//                 <div className="center-content">
//                     <h2>Welcome, {userName}!</h2>
//                     <div className="content">{content}</div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default UserPage;
 //the first oneis mine

import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { Line } from 'react-chartjs-2';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { BarChart, Bar} from 'recharts';


import './UserPage.css';

function UserPage() {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user ? user.id : null;
    const userName = user ? user.name : '';

    const [content, setContent] = useState('');
    // Initialize an array to store log data entries
    const [logDataArray, setLogDataArray] = useState([]);
 
    const handleNavigationItemClick = async (itemName) => {
        let newContent = '';
        switch (itemName) {
            case 'my-exercises':
                // Fetch user's workout data from the JSON server
                if (userId) {
                    try {
                        const response = await axios.get(`http://localhost:3001/users/${userId}`);
                        const userData = response.data;

                        // Check if the user has a workout field
                        if (userData.workout && userData.workout.length > 0) {
                            console.log('User workout data:', userData.workout);
                            newContent = (
                                <div>
                                    <h2>My Exercises</h2>
                                    <ul>
                                        {userData.workout.map((workout, index) => (
                                            <li key={index}>
                                                <p><strong>Muscle:</strong> {workout.workoutName1}</p>
                                                <p><strong>Workout Name 1:</strong> {workout.workoutName1}</p>
                                                <p><strong>Workout Name 2:</strong> {workout.workoutName2}</p>
                                                <p><strong>Reps:</strong> {workout.reps}</p>
                                                <p><strong>Weight:</strong> {workout.weight}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        } else {
                            console.log('No workout data found for the user.');
                            newContent = 'No workout data found for the user.';
                        }
                    } catch (error) {
                        console.error('Error fetching user data:', error);
                        newContent = 'Error fetching workout data. Please try again later.';
                    }
                } else {
                    newContent = 'User not logged in.';
                }
                break;
            case 'consult-trainer':
                newContent = (
                    <div>
                        <h2>Consult Trainer</h2>
                        <form onSubmit={handleSubmitConsultation}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exercise-type">Type of Exercise Required:</label>
                                <input type="text" id="exercise-type" name="exercise-type" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="health-issues">Health Issues:</label>
                                <div className="radio-container">
                                    <label htmlFor="yes">
                                        <input type="radio" id="yes" name="health-issues" value="Yes" required />
                                        Yes
                                    </label>
                                    <label htmlFor="no">
                                        <input type="radio" id="no" name="health-issues" value="No" required />
                                        No
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-no">Contact Number:</label>
                                <input type="text" id="contact-no" name="contact-no" required />
                            </div>
                            <button type="submit">Consult</button>
                        </form>
                    </div>
                );
                break;
            
            case 'log-data':
                newContent = (
                    <div>
                        <h2>Log Data</h2>
                        <form onSubmit={handleSubmitLogData}>
                            <div className="form-group">
                                <label htmlFor="effort-level">Effort Level:</label>
                                <select id="effort-level" name="effort-level" required>
                                    <option value="beginner">Beginner</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="advanced">Advanced</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="reps">Number of Reps:</label>
                                <input type="number" id="reps" name="reps" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="target-muscle">Target Muscle:</label>
                                <input type="text" id="target-muscle" name="target-muscle" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="duration">Duration:</label>
                                <input type="text" id="duration" name="duration" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="calories-burnt">Number of Calories Burnt:</label>
                                <input type="number" id="calories-burnt" name="calories-burnt" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Date:</label>
                                <input type="date" id="date" name="date" required />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                );
                break;

            // case 'profile':
            //     newContent = (
            //         <div className="profile-details">
            //             <h2>Profile Details</h2>
            //             <p><strong>Name:</strong> {user.name}</p>
            //             <p><strong>Email:</strong> {user.email}</p>
            //             <p><strong>Age:</strong> {user.age}</p>
            //             <p><strong>Height:</strong> {user.height}</p>
            //             <p><strong>Weight:</strong> {user.weight}</p>
            //         </div>
            //     );
            //     break;
            case 'profile':
                const logData = user.Log ;
                console.log("from rofile page",logData)
                newContent = (
                    <div className="profile-details">
                        <h2>Profile Details</h2>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Age:</strong> {user.age}</p>
                        <p><strong>Height:</strong> {user.height}</p>
                        <p><strong>Weight:</strong> {user.weight}</p>
                        {/* Plot the graph */}
                        <div style={{ width: '100%', height: '400px' }}>
                            {logData && plotCaloriesVsDate(logData)}
                        </div>
                        <div style={{ width: '100%', height: '400px' }}>
                            {logData && plotRepsAndDuration(logData)}
                        </div>

                    </div>
                );
            break;
            default:
                newContent = '';
        }
        setContent(newContent);
    };

    const plotCaloriesVsDate = (logData) => {
        // Transform logData to the specified data format
        const data = logData.map(logEntry => ({
            name: logEntry.date, // Use date as the name for the X-axis
            caloriesBurnt: logEntry.caloriesBurnt, // Use calories burnt as the data point
        }));
        console.log("profile react", data);
    
        return (
            <div style={{ width: '100%', height: '400px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }} // Increase bottom margin
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" label={{ value: 'Date', position: 'insideBottom', offset: -10 }} />
                        <YAxis label={{ value: 'Calories Burnt', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36} /> // Move legend to the top
                        <Line type="monotone" dataKey="caloriesBurnt" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    };

    const plotRepsAndDuration = (logData) => {
        // Transform logData to the specified data format
        const data = logData.map(logEntry => ({
            targetMuscle: logEntry.targetMuscle, // Use targetMuscle as the X-axis label
            reps: logEntry.reps, // Use reps as the first data point on the Y-axis
            duration: parseInt(logEntry.duration), // Use duration as the second data point on the Y-axis
        }));
        console.log("Duration", data);
        return (
            <div style={{ width: '100%', height: '400px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="targetMuscle" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="reps" fill="#0f3133" />
                        <Bar dataKey="duration" fill="#7c7234" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    };
    
    

    // const plotCaloriesVsDate = (logData) => {
    //     // Transform logData to the specified data format
    //     const data = logData.map(logEntry => ({
    //         name: logEntry.date, // Use date as the name for the X-axis
    //         caloriesBurnt: logEntry.caloriesBurnt, // Use calories burnt as the data point
    //     }));
    //     console.log("profile react", data);
    
    //     return (
    //         <div style={{ width: '100%', height: '300px' }}>
    //             <ResponsiveContainer width="100%" height="100%">
    //                 <LineChart
    //                     data={data}
    //                     margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    //                 >
    //                     <CartesianGrid strokeDasharray="3 3" />
    //                     <XAxis dataKey="name" label={{ value: 'Date', position: 'insideBottom', offset: -10 }} />
    //                     <YAxis label={{ value: 'Calories Burnt', angle: -90, position: 'insideLeft' }} />
    //                     <Tooltip />
    //                     <Legend />
    //                     <Line type="monotone" dataKey="caloriesBurnt" stroke="#82ca9d" />
    //                 </LineChart>
    //             </ResponsiveContainer>
    //         </div>
    //     );
    // };
    
    

    // };
    const handleSubmitLogData = async (event) => {
        event.preventDefault();
        
        // Collect form data
        const effortLevel = event.target.elements['effort-level'].value;
        const reps = parseInt(event.target.elements['reps'].value);
        const targetMuscle = event.target.elements['target-muscle'].value;
        const duration = event.target.elements['duration'].value;
        const caloriesBurnt = parseInt(event.target.elements['calories-burnt'].value);
        const date = event.target.elements['date'].value;
        
        // Create a new log data object
        const newLogData = {
            effortLevel,
            reps,
            targetMuscle,
            duration,
            caloriesBurnt,
            date,
        };
    
        // Check if userId is available
        if (userId) {
            try {
                // Fetch the specific user's data from the server
                const response = await axios.get(`http://localhost:3001/users/${userId}`);
                const userData = response.data;

                if (!userData.Log) {
                    // If not, initialize an empty array
                    userData.Log = [];
                }
    
                // Update the user's workout data with the new log data entry
                userData.Log.push(newLogData);
    
                // Send the updated user data back to the server
                const updateResponse = await axios.put(`http://localhost:3001/users/${userId}`, userData);
    
                console.log('updataed data from Log data in json ', updateResponse);
    
                // Optional: Provide feedback to the user (e.g., set success message in the content state)
                setContent('Log data added successfully.');
    
            } catch (error) {
                console.error('Error updating user data:', error);
                // Optional: Provide error feedback to the user (e.g., set error message in the content state)
                setContent('Error adding log data. Please try again later.');
            }
        } else {
            console.error('User ID not available.');
            // Optional: Provide error feedback to the user (e.g., set error message in the content state)
            setContent('Error: User not logged in.');
        }
    
        // Reset the form
        event.target.reset();
    };
    const handleSubmitConsultation = async (event) => {
        event.preventDefault();

        // Collect form data
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
        <div className="user-page">
            <div className="left-navbar">
                <ul>
                    <li onClick={() => handleNavigationItemClick('profile')}>Profile</li>
                    <li onClick={() => handleNavigationItemClick('my-exercises')}>My Exercises</li>
                    <li onClick={() => handleNavigationItemClick('consult-trainer')}>Consult Trainer</li>
                    <li onClick={() => handleNavigationItemClick('log-data')}>Log Data</li>
                </ul>
            </div>
            <div className="center-content">
                <h2>Welcome, {userName}!</h2>
                <div className="content">{content}</div>
            </div>
        </div>
    );
}

export default UserPage;

