import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllUsers } from '../../api/userApi';
import UserDetail from './UserDetail';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await getAllUsers();
            setUsers(usersData);
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>User List</h1>
            <button onClick={() => navigate('/add-user')}>Add User</button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <UserDetail user={user} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
