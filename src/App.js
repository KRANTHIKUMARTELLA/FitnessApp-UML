// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import NavigationBar from './NavigationBar';
import HomePage from './HomePage';
import ContactUs from './ContactUs';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WorkoutPage from './WorkoutPage'; 
import UserPage from './UserPage';
import AdminPage from './AdminPage';
import PersonalTrainerPage from './PersonalTrainerPage';



function App() {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/workout/:bodyPart" element={<WorkoutPage />} />
                <Route path="/workout" component={WorkoutPage} />
                <Route path="/user" element={<UserPage />} />    
                <Route path="/admin" element={<AdminPage />} />  
                <Route path="/personal-trainer" element={<PersonalTrainerPage />} />          
                {/* <Route path="/workout/:division" element={<WorkoutPage />} /> */}
                {/* <Route path="/workout/:bodyPart" element={<WorkoutPage></WorkoutPage>} /> */}
                {/* <Route path="/contact" component={ContactUs} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} /> */}
            </Routes>
        </Router>
    );
}

export default App;

