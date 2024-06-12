import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../api/userApi';
import UserDetail from './UserDetail';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null); // State to manage error message

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await getAllUsers();
                if (usersData.length === 0) {
                    setError('Oops! there was an issue fetching the users. I think the Userservice is not running ;)');
                } else {
                    setUsers(usersData);
                }
            } catch (error) {
                setError('Oops! there was an issue fetching the users. I think the Userservice is not running ;)');
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>User List</h1>
            {error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <UserDetail user={user} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserList;
