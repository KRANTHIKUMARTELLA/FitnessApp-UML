import React from 'react';
import { Link } from 'react-router-dom';
import './ExercisesPage.css';

function ExercisesPage() {
    return (
        <div className="exercises-page">
            <h2 className="section-title">Exercises</h2>
            <div className="exercises-grid">
                {/* Exercise Card Links */}
                <Link to="/workout/chest" className="exercise-card">
                    <h3>Chest</h3>
                    <ul>
                        <li>Bench Press</li>
                        <li>Push-ups</li>
                        <li>Chest Fly</li>
                    </ul>
                </Link>
                <Link to="/workout/back" className="exercise-card">
                    <h3>Back</h3>
                    <ul>
                        <li>Pull-ups</li>
                        <li>Rows</li>
                        <li>Deadlift</li>
                    </ul>
                </Link>
                <Link to="/workout/lower arms" className="exercise-card">
                    <h3>Lower Arms</h3>
                    <ul>
                        <li>Pull-ups</li>
                        <li>Curls</li>
                        <li>Deadlift</li>
                    </ul>
                </Link>
                <Link to="/workout/upper arms" className="exercise-card">
                    <h3>Upper Arms</h3>
                    <ul>
                        <li>Curls</li>
                        <li>Lunges</li>
                        <li>Bench Press</li>
                    </ul>
                </Link>
                <Link to="/workout/cardio" className="exercise-card">
                    <h3>Cardio</h3>
                    <ul>
                        <li>Treadmill</li>
                        <li>Burpees</li>
                        <li>Jumping Jacks</li>
                    </ul>
                </Link>
                <Link to="/workout/shoulders" className="exercise-card">
                    <h3>Shoulders</h3>
                    <ul>
                        <li>Shoulder Press</li>
                        <li>Lateral Raises</li>
                        <li>Front Raises</li>
                    </ul>
                </Link>
                <Link to="/workout/upper legs" className="exercise-card">
                    <h3>Upper Legs</h3>
                    <ul>
                        <li>Hamstring Curl</li>
                        <li>Glute Kick</li>
                        <li>Leg Press</li>
                    </ul>
                </Link>
                <Link to="/workout/lower legs" className="exercise-card">
                    <h3>Lower Legs</h3>
                    <ul>
                        <li>Leg Press</li>
                        <li>Squats</li>
                        <li>Deadlift</li>
                    </ul>
                </Link>
            </div>
        </div>
    );
}

export default ExercisesPage;