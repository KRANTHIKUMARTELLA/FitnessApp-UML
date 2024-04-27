// import React, { useEffect } from 'react';

// function WorkoutPage({ bodyPart  }) {
//     // Define a function to fetch data from the API and log it in the console
//     const fetchDataFromApi = async () => {
//         // Define the API URL based on the selected body part
//         const apiUrl = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`;

//         // API options
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': '8d2876b6b6mshb13080e4e64fb5fp155f31jsn49aeee494618', // Replace this with your RapidAPI key
//                 'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//             },
//         };

//         try {
//             // Fetch data from the API
//             const response = await fetch(apiUrl, options);
//             const data = await response.json();

//             // Log the fetched data to the console
//             console.log('Fetched data:', data);
//             console.log(bodyPart)
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     // Use the useEffect hook to call the fetchDataFromApi function when the component mounts
//     useEffect(() => {
//         fetchDataFromApi();
//     }, [bodyPart]);

//     return (
//         <div>
//             <h2>{bodyPart} Workouts</h2>
//             <p>Check the console for the fetched data.</p>
//         </div>
//     );
// }

// export default WorkoutPage;

// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// function WorkoutPage() {
//     const location = useLocation();
//     const { bodyPart } = location.state; // Get the bodyPart from the state passed from homepage

//     useEffect(() => {
//         // Define the API URL using the bodyPart
//         const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`;
        
//         // Define the API request options
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': 'YOUR_API_KEY', // Replace 'YOUR_API_KEY' with your actual API key
//                 'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//             }
//         };

//         // Fetch data from the API
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(url, options);
//                 const data = await response.json();
//                 console.log('Fetched data:', data);
//                 // Handle the data as needed
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         // Call the fetchData function
//         fetchData();
//     }, [bodyPart]);

//     return (
//         <div className="workout-page">
//             <h2>Workouts for {bodyPart}</h2>
//             {/* You can display the fetched data in this component */}
//         </div>
//     );
// }

// export default WorkoutPage;


// import React from 'react';
// import { useParams } from 'react-router-dom';


// function WorkoutPage() {
//     // Use the useParams hook to get the body part from the URL parameter
//     const { bodyPart } = useParams();

//     return (
//         <div className="workout-page">
//             <h2>{bodyPart} workout has been selected</h2>
//             {/* Display additional information about the selected workout here */}
//         </div>
//     );
// }

//export default WorkoutPage;

// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function WorkoutPage() {
//     // Use useParams hook to get the bodyPart from the URL parameters
//     const { bodyPart } = useParams();

//     // Define a function to fetch data from the API
//     const fetchDataFromApi = async () => {
//         // Define the API URL based on the selected body part
//         const apiUrl = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`;

//         // API options
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': '8d2876b6b6mshb13080e4e64fb5fp155f31jsn49aeee494618', // Replace this with your RapidAPI key
//                 'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//             },
//         };

//         try {
//             // Fetch data from the API
//             const response = await fetch(apiUrl, options);
//             const data = await response.json();

//             // Log the fetched data to the console
//             console.log('Fetched data:', data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     // Use the useEffect hook to call fetchDataFromApi when the component mounts or the bodyPart changes
//     useEffect(() => {
//         fetchDataFromApi();
//     }, [bodyPart]);

//     return (
//         <div>
//             <h2>{bodyPart} Workouts</h2>
//             <p>Check the console for the fetched data.</p>
//         </div>
//     );
// }

// export default WorkoutPage;

//the above code has api end point in console

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './WorkoutPage.css';


function WorkoutPage() {
    // Use useParams hook to get the bodyPart from the URL parameters
    const { bodyPart } = useParams();
    const [exercises, setExercises] = useState([]);

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    

    // Define a function to fetch data from the API
    const fetchDataFromApi = async () => {
        // Define the API URL based on the selected body part
        const apiUrl = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`;

        // API options
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8d2876b6b6mshb13080e4e64fb5fp155f31jsn49aeee494618', // Replace this with your RapidAPI key
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            },
        };

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl, options);
            const data = await response.json();

            // Set the exercises data in state
            setExercises(data);

            // Log the fetched data to the console
            console.log('Fetched data:', data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Use the useEffect hook to call fetchDataFromApi when the component mounts or the bodyPart changes
    useEffect(() => {
        fetchDataFromApi();
    }, [bodyPart]);

    return (
        <div className="workout-page">
            <h2 className="page-title">{capitalizeFirstLetter(bodyPart)} Workouts</h2>
            <div className="exercises-grid">
                {exercises.map((exercise) => (
                    <div key={exercise.id} className="exercise-card">
                        <h3 className="exercise-name">{capitalizeFirstLetter(exercise.name)}</h3>
                        <img src={exercise.gifUrl} alt={exercise.name} className="exercise-image" />
                        <div className="exercise-details">
                            <p><strong>Target muscles:</strong> {exercise.target}</p>
                            <p><strong>Secondary muscles:</strong> {exercise.secondaryMuscles.join(', ')}</p>
                            <p><strong>Equipment:</strong> {exercise.equipment}</p>
                            <div className="instructions">
                                <h4>Instructions:</h4>
                                <ul>
                                    {exercise.instructions.map((instruction, index) => (
                                        <li key={index}>{instruction}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkoutPage;





