// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './PersonalTrainerPage.css';

// function PersonalTrainerPage() {
//     const [consultations, setConsultations] = useState([]);
//     const imageAPI = 'https://avatars.dicebear.com/api/bottts/'; // Example API for randomly generated animated avatars

//     useEffect(() => {
//         // Fetch data from the JSON server for consultations
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/consultations');
//                 setConsultations(response.data);
//             } catch (error) {
//                 console.error('Error fetching consultations:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className="personal-trainer-page">
//             <h2>Welcome, Personal Trainer!</h2>
//             <h3>Consultations:</h3>
//             <div className="consultation-grid">
//                 {consultations.map((consultation) => (
//                     <div className="consultation-box" key={consultation.id}>
//                         {/* Image of the user from an image API */}
//                         <img
//                             src={`${imageAPI}${consultation.id}.svg`}
//                             alt="User avatar"
//                             className="user-avatar"
//                         />
//                         <div className="consultation-details">
//                             <p><strong>Name:</strong> {consultation.name}</p>
//                             <p><strong>Exercise Type:</strong> {consultation.exerciseType}</p>
//                             <p><strong>Health Issues:</strong> {consultation.healthIssues}</p>
//                             <p><strong>Contact No:</strong> {consultation.contactNo}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default PersonalTrainerPage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './PersonalTrainerPage.css';

// function PersonalTrainerPage() {
//     const [consultations, setConsultations] = useState([]);

//     // Use Lorem Picsum API to generate random images
//     const randomImageAPI = 'https://picsum.photos/seed';

//     useEffect(() => {
//         // Fetch data from the JSON server for consultations
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/consultations');
//                 setConsultations(response.data);
//             } catch (error) {
//                 console.error('Error fetching consultations:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className="personal-trainer-page">
//             <h2>Welcome, Personal Trainer!</h2>
//             <h3>Consultations:</h3>
//             <div className="consultation-grid">
//                 {consultations.map((consultation) => (
//                     <div className="consultation-box" key={consultation.id}>
//                         {/* Use Lorem Picsum API for user avatar */}
//                         <img
//                             src={`${randomImageAPI}/${consultation.id}/100`}
//                             alt="User avatar"
//                             className="user-avatar"
//                         />
//                         <div className="consultation-details">
//                             <p><strong>Name:</strong> {consultation.name}</p>
//                             <p><strong>Exercise Type:</strong> {consultation.exerciseType}</p>
//                             <p><strong>Health Issues:</strong> {consultation.healthIssues}</p>
//                             <p><strong>Contact No:</strong> {consultation.contactNo}</p>
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
        // Log the seed value for debugging purposes
        console.log('Seed value:', seed);
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

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, e.g., save data or send to API

        // Close the modal after submission
        closeModal();
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
                        {/* Add button to open the modal */}
                        <button onClick={() => openModal(consultation)}>Add Workout</button>
                    </div>
                ))}
            </div>

            {/* Render the modal form when isModalOpen is true */}
            {isModalOpen && selectedConsultation && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Add Workout</h3>
                        <form onSubmit={handleSubmit}>
                            {/* Pre-fill user name */}
                            <label>
                                User Name:
                                <input
                                    type="text"
                                    value={selectedConsultation.name}
                                    readOnly
                                />
                            </label>
                            {/* Fields for workout name, reps, and weight */}
                            <label>
                                Workout Name:
                                <input
                                    type="text"
                                    required
                                    // Add a state variable and handler for workout name if needed
                                />
                            </label>
                            <label>
                                Number of Reps:
                                <input
                                    type="number"
                                    required
                                    // Add a state variable and handler for reps if needed
                                />
                            </label>
                            <label>
                                Weight:
                                <input
                                    type="number"
                                    required
                                    // Add a state variable and handler for weight if needed
                                />
                            </label>
                            {/* Form buttons */}
                            <button type="submit">Submit</button>
                            <button type="button" onClick={closeModal}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PersonalTrainerPage;






