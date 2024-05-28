import React from 'react';
import { useParams } from 'react-router-dom';
import UserDetail from '../components/User/UserDetail';
import { getUserById } from '../api/userApi';

const UserPage = () => {
    const { id } = useParams();
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        const fetchUser = async () => {
            const userData = await getUserById(id);
            setUser(userData);
        };

        fetchUser();
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <UserDetail user={user} />
        </div>
    );
};

export default UserPage;
