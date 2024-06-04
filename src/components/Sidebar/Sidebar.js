// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Navigation</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/add-user">Add User</Link></li>
                <li><Link to="/add-travelrequest">Add Travel Request</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
