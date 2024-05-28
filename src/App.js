import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/User/UserList';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import AddUserPage from './pages/AddUserPage';  // Importeer de nieuwe pagina

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/user/:id" element={<UserPage />} />
                <Route path="/add-user" element={<AddUserPage />} />
            </Routes>
        </Router>
    );
}

export default App;
