// import React from 'react';

// function HomePage() {
//     return (
//         <div style={{ padding: '20px' }}>
//             <div style={{ textAlign: 'center' }}>
//                 <img src="https://www.google.com/search?sca_esv=619c697d276fe56b&sca_upv=1&sxsrf=ACQVn0_MQ-DVXkK8XQMuwL4SQOCdjSEubw:1713993215135&q=fitness&tbm=isch&source=lnms&prmd=imnvsbtz&sa=X&ved=2ahUKEwix3PCl4tuFAxXUkIkEHWuMB0MQ0pQJegQIFxAB&biw=1440&bih=735&dpr=2#imgrc=hYT2LODi8jhgcM" alt="Fitness" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
//             </div>
//             <h2 style={{ margin: '20px 0' }}>Exercises</h2>
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
//                 <div style={{ padding: '10px', border: '1px solid #ccc' }}>
//                     <h3>Chest</h3>
//                     <ul>
//                         <li>Bench Press</li>
//                         <li>Push-ups</li>
//                         <li>Chest Fly</li>
//                     </ul>
//                 </div>
//                 <div style={{ padding: '10px', border: '1px solid #ccc' }}>
//                     <h3>Shoulder</h3>
//                     <ul>
//                         <li>Shoulder Press</li>
//                         <li>Lateral Raises</li>
//                         <li>Front Raises</li>
//                     </ul>
//                 </div>
//                 <div style={{ padding: '10px', border: '1px solid #ccc' }}>
//                     <h3>Back</h3>
//                     <ul>
//                         <li>Pull-ups</li>
//                         <li>Rows</li>
//                         <li>Deadlift</li>
//                     </ul>
//                 </div>
//                 <div style={{ padding: '10px', border: '1px solid #ccc' }}>
//                     <h3>Legs</h3>
//                     <ul>
//                         <li>Squats</li>
//                         <li>Lunges</li>
//                         <li>Leg Press</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default HomePage;

import React from 'react';
import './HomePage.css';
//import fitnessImage from './fitness.jpg';
import fitness from './assets/fitness.jpg';

function HomePage() {
    return (
        <div className="home-page">
            <div className="hero-section">
                <img
                    src={fitness}
                    alt="Fitness"
                    className="hero-image"
                />
                <h1 className="hero-text">Welcome to Our Fitness App</h1>
            </div>
            <h2 className="section-title">Exercises</h2>
            <div className="exercises-grid">
                <div className="exercise-card">
                    <h3>Chest</h3>
                    <ul>
                        <li>Bench Press</li>
                        <li>Push-ups</li>
                        <li>Chest Fly</li>
                    </ul>
                </div>
                <div className="exercise-card">
                    <h3>Shoulder</h3>
                    <ul>
                        <li>Shoulder Press</li>
                        <li>Lateral Raises</li>
                        <li>Front Raises</li>
                    </ul>
                </div>
                <div className="exercise-card">
                    <h3>Back</h3>
                    <ul>
                        <li>Pull-ups</li>
                        <li>Rows</li>
                        <li>Deadlift</li>
                    </ul>
                </div>
                <div className="exercise-card">
                    <h3>Legs</h3>
                    <ul>
                        <li>Squats</li>
                        <li>Lunges</li>
                        <li>Leg Press</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HomePage;

