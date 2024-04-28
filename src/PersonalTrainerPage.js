
// export default PersonalTrainerPage;

// import React from 'react';
// import axios from 'axios';
// import './PersonalTrainerPage.css';

// function PersonalTrainerPage() {
//     const [consultations, setConsultations] = React.useState([]);

//     // Fetch consultations from the JSON server
//     React.useEffect(() => {
//         axios.get('http://localhost:3001/consultations')
//             .then(response => {
//                 setConsultations(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching consultations:', error);
//             });
//     }, []);

//     // Function to generate the Dicebear API URL
//     const getAvatarUrl = (seed) => {
//         console.log('Seed value:', seed);

//         // Replace 'identicon' with the desired avatar style
//         return 'https://api.dicebear.com/8.x/pixel-art/svg?seed=${seed}';
//         //return `https://api.dicebear.com/6.x/identicon/${seed}.png`;
//     };

//     return (
//         <div className="personal-trainer-page">
//             <h2>Consultation Details</h2>
//             <div className="consultation-grid">
//                 {consultations.map((consultation) => (
//                     <div key={consultation.name} className="consultation-box">
//                         {/* Fetch avatar using Dicebear API */}
//                         <img
//                             src={getAvatarUrl(consultation.name)}
//                             alt="User Avatar"
//                             className="user-avatar"
//                         />
//                         <div className="consultation-details">
//                             <p>ID: {consultation.id}</p>
//                             <p>Name: {consultation.name}</p>
//                             <p>Exercise Type: {consultation.exerciseType}</p>
//                             <p>Health Issues: {consultation.healthIssues}</p>
//                             <p>Contact No: {consultation.contactNo}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default PersonalTrainerPage;

// import React from 'react';
// import axios from 'axios';
// import './PersonalTrainerPage.css';

// function PersonalTrainerPage() {
//     const [consultations, setConsultations] = React.useState([]);

//     // Fetch consultations from the JSON server
//     React.useEffect(() => {
//         axios.get('http://localhost:3001/consultations')
//             .then(response => {
//                 setConsultations(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching consultations:', error);
//             });
//     }, []);

//     // Function to generate the DiceBear API URL
//     const getAvatarUrl = (seed) => {
//         // Log the seed value for debugging purposes
//         console.log('Seed value:', seed);

//         // Generate the URL for the DiceBear avatar using the seed
//         return `https://api.dicebear.com/8.x/pixel-art/svg?seed=${seed}`;
//     };

//     return (
//         <div className="personal-trainer-page">
//             <h2>Consultation Details</h2>
//             <div className="consultation-grid">
//                 {consultations.map((consultation) => (
//                     <div key={consultation.id} className="consultation-box">
//                         {/* Fetch avatar using the DiceBear API */}
//                         <img
//                             src={getAvatarUrl(consultation.name)}
//                             alt="User Avatar"
//                             className="user-avatar"
//                         />
//                         <div className="consultation-details">
//                             <p>ID: {consultation.id}</p>
//                             <p>Name: {consultation.name}</p>
//                             <p>Exercise Type: {consultation.exerciseType}</p>
//                             <p>Health Issues: {consultation.healthIssues}</p>
//                             <p>Contact No: {consultation.contactNo}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default PersonalTrainerPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PersonalTrainerPage.css';

function PersonalTrainerPage() {
    const [consultations, setConsultations] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedConsultation, setSelectedConsultation] = useState(null);

    // Fetch consultations from the JSON server
    useEffect(() => {
        axios.get('http://localhost:3001/consultations')
            .then(response => {
                setConsultations(response.data);
            })
            .catch(error => {
                console.error('Error fetching consultations:', error);
            });
    }, []);

    // Function to generate the DiceBear API URL
    const getAvatarUrl = (seed) => {
        return `https://api.dicebear.com/8.x/pixel-art/svg?seed=${seed}`;
    };

    // Function to handle opening the modal
    const openModal = (consultation) => {
        setSelectedConsultation(consultation);
        setIsModalOpen(true);
    };

    // Function to handle closing the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedConsultation(null);
    };

    const deleteUser = async (userId) => {
        try {
            await axios.delete(`http://localhost:3001/consultations/${userId}`);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Collect form data
        const workoutName1 = e.target.elements['workoutName1'].value;
        const workoutName2 = e.target.elements['workoutName2'].value;
        const reps = parseInt(e.target.elements['reps'].value);
        const weight = parseFloat(e.target.elements['weight'].value);

        // Create the workout object
        const newWorkout = {
            workoutName1,
            workoutName2,
            reps,
            weight,
        };

        try {
            // Fetch the existing data for the user from the JSON server
           // const response = await axios.get(`http://localhost:3001/consultations/${selectedConsultation.id}`);
            const response1 = await axios.get(`http://localhost:3001/users/${selectedConsultation.id}`);
           // const userData = response.data;
            const userData1= response1.data
            console.log(userData1);

            // Check if the 'workout' field exists in the user's data
            if (!userData1.workout) {
                // If not, initialize an empty array
                userData1.workout = [];
            }

            // Add the new workout data to the user's workout array
            userData1.workout.push(newWorkout);

            await deleteUser(selectedConsultation.id);

            // Send the updated user data back to the JSON server
            await axios.put(`http://localhost:3001/users/${selectedConsultation.id}`, userData1);
            setConsultations(consultations.filter(consultation => consultation.id !== selectedConsultation.id));


            // Close the modal after successful submission
            closeModal();
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    return (
        <div className="personal-trainer-page">
            <h2>Consultation Details</h2>
            <div className="consultation-grid">
                {consultations.map((consultation) => (
                    <div key={consultation.id} className="consultation-box">
                        {/* Display avatar using DiceBear API */}
                        <img
                            src={getAvatarUrl(consultation.name)}
                            alt="User Avatar"
                            className="user-avatar"
                        />
                        <div className="consultation-details">
                            <p>ID: {consultation.id}</p>
                            <p>Name: {consultation.name}</p>
                            <p>Exercise Type: {consultation.exerciseType}</p>
                            <p>Health Issues: {consultation.healthIssues}</p>
                            <p>Contact No: {consultation.contactNo}</p>
                        </div>
                        {/* Button to open the modal */}
                        <button onClick={() => openModal(consultation)}>Add Workout</button>
                    </div>
                ))}
            </div>

            {/* Modal for adding a workout */}
            {isModalOpen && selectedConsultation && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Add Workout</h3>
                        <form onSubmit={handleSubmit}>
                            {/* User name input */}
                            <label>
                                User Name:
                                <input
                                    type="text"
                                    value={selectedConsultation.name}
                                    readOnly
                                />
                            </label>
                            <label>
                                Muscle:
                                <input
                                    type="text"
                                    value={selectedConsultation.exerciseType}
                                    readOnly
                                />
                            </label>
                            {/* Form fields for workout name, reps, and weight */}
                            <label>
                                Workout Name 1:
                                <input
                                    type="text"
                                    name="workoutName1"
                                    required
                                />
                            </label>
                            <label>
                                Workout Name 2:
                                <input
                                    type="text"
                                    name="workoutName2"
                                    required
                                />
                            </label>
                            <label>
                                Number of Reps:
                                <input
                                    type="number"
                                    name="reps"
                                    required
                                />
                            </label>
                            <label>
                                Weight:
                                <input
                                    type="number"
                                    name="weight"
                                    required
                                />
                            </label>

                            {/* Submit and cancel buttons */}
                            <div className="form-buttons">
                                <button type="submit">Submit</button>
                                <button type="button" onClick={closeModal}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PersonalTrainerPage;







