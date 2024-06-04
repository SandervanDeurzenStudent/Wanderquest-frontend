import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../api/userApi';
import './AddUserPage.css'; // Vergeet niet je CSS-bestand te importeren

const AddUserPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { name, email };
        await createUser(newUser);
        navigate('/users');
    };

    return (
        <div className="form-container">
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label><br/>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label><br/>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUserPage;
