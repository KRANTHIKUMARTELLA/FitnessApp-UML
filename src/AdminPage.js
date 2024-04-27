// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

import { dblClick } from "@testing-library/user-event/dist/click"

// function AdminPage() {
//     const [users, setUsers] = useState([]);

//     // Fetch users from db.json
//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/users');
//                 setUsers(response.data);
//             } catch (error) {
//                 console.error('Failed to fetch users:', error);
//             }
//         };

//         fetchUsers();
//     }, []);

//     return (
//         <div>
//             <h2>Hello Admin</h2>
//             <div className="user-grid">
//                 {users.map((user) => (
//                     <div key={user.id} className="user-card">
//                         <h3>{user.name ? user.name : user.email}</h3> {/* Display name if available, otherwise email */}
//                         <p>Email: {user.email}</p>
//                         <p>Password: {user.password}</p>
//                         {user.age && <p>Age: {user.age}</p>}
//                         {user.height && <p>Height: {user.height} cm</p>}
//                         {user.weight && <p>Weight: {user.weight} kg</p>}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default AdminPage;
//this gets data from the dblClick.json adn displays it 

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function AdminPage() {
//     const [users, setUsers] = useState([]);

//     // Fetch users from db.json
//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/users');
//                 setUsers(response.data);
//             } catch (error) {
//                 console.error('Failed to fetch users:', error);
//             }
//         };

//         fetchUsers();
//     }, []);

//     // Function to handle toggle button change
//     const handleToggleStatus = async (userId, currentStatus) => {
//         try {
//             // Determine the new status
//             const newStatus = currentStatus === 'grant' ? 'revoke' : 'grant';

//             // Update the status of the user in the database
//             await axios.patch(`http://localhost:3001/users/${userId}`, { status: newStatus });

//             // Update the local state to reflect the change
//             const updatedUsers = users.map((user) =>
//                 user.id === userId ? { ...user, status: newStatus } : user
//             );
//             setUsers(updatedUsers);
//         } catch (error) {
//             console.error('Failed to update user status:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Hello Admin</h2>
//             <div className="user-grid">
//                 {users.map((user) => (
//                     <div key={user.id} className="user-card">
//                         <h3>{user.name || user.email}</h3> {/* Display name if available, otherwise email */}
//                         <div>
//                             {/* Toggle button for user status */}
//                             <label>
//                                 <input
//                                     type="checkbox"
//                                     checked={user.status === 'grant'}
//                                     onChange={() => handleToggleStatus(user.id, user.status)}
//                                 />
//                                 {user.status === 'grant' ? 'Revoke' : 'Grant'}
//                             </label>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default AdminPage;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminPage.css'; // Import the CSS file for styling

function AdminPage() {
    const [users, setUsers] = useState([]);

    // Fetch users from db.json
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };

        fetchUsers();
    }, []);

    // Function to handle toggle button change
    const handleToggleStatus = async (userId, currentStatus) => {
        try {
            // Determine the new status
            const newStatus = currentStatus === 'grant' ? 'revoke' : 'grant';

            // Update the status of the user in the database
            await axios.patch(`http://localhost:3001/users/${userId}`, { status: newStatus });

            // Update the local state to reflect the change
            const updatedUsers = users.map((user) =>
                user.id === userId ? { ...user, status: newStatus } : user
            );
            setUsers(updatedUsers);
        } catch (error) {
            console.error('Failed to update user status:', error);
        }
    };

    return (
        <div className="admin-page">
            <h2>Hello Admin</h2>
            <div className="user-grid">
                {users.map((user) => (
                    <div key={user.id} className="user-card">
                        <div className="name-column">
                            <span className="name-text">{user.name || user.email}</span>
                        </div>
                        <div className="toggle-column">
                            <button
                                className={`toggle-button ${user.status === 'grant' ? 'grant' : 'revoke'}`}
                                onClick={() => handleToggleStatus(user.id, user.status)}
                            >
                                {user.status === 'grant' ? 'Revoke' : 'Grant'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminPage;


