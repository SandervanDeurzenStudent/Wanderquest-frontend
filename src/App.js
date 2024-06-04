import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/User/UserList';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import AddUserPage from './pages/AddUserPage';
import GoogleLoginButton from "./components/GoogleLoginButton";
import GDPRPopup from './components/PopUp/GDPRPopup';
import Sidebar from './components/Sidebar/Sidebar';
import AddTravelRequestPage from "./pages/AddTravelRequest";
import { jwtDecode } from 'jwt-decode';  // Correct way to import jwtDecode
function App() {
    const [gdprAccepted, setGdprAccepted] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const accepted = localStorage.getItem('gdprAccepted') === 'true';
        setGdprAccepted(accepted);
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const userObject = jwtDecode(token);
            setUser(userObject);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('gdprAccepted', 'true');
        setGdprAccepted(true);
    };

    const handleLoginSuccess = useCallback((user) => {
        setUser(user);
    }, []);

    if (!gdprAccepted) {
        return <GDPRPopup onAccept={handleAccept} />;
    }

    return (
        <Router>
            <div className="app-container">
                <Sidebar />
                <div className="main-content">
                    <GoogleLoginButton onLoginSuccess={handleLoginSuccess} />
                    {user && (
                        <div className="user-buttons">
                            <a href="http://localhost:3000/users"><button>See more details</button></a>
                        </div>
                    )}
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/users" element={<UserList />} />
                        <Route path="/user/:id" element={<UserPage />} />
                        <Route path="/add-user" element={<AddUserPage />} />
                        <Route path="/add-travelrequest" element={<AddTravelRequestPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
