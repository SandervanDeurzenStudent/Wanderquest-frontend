import React, { useState, useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const GoogleLoginButton = ({ onLoginSuccess }) => {
    const [user, setUser] = useState(null);
    const clientId = '970957259342-pda8i9mukpf857fppgq49sqa48rnqb1c.apps.googleusercontent.com';

    const onSuccess = (response) => {
        const userObject = jwtDecode(response.credential);
        setUser(userObject);
        localStorage.setItem('token', response.credential);
        console.log('Login Success: currentUser:', userObject);
        onLoginSuccess(userObject);
    };

    const onFailure = (response) => {
        console.log('Login failed: res:', response);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const userObject = jwtDecode(token);
            setUser(userObject);
            onLoginSuccess(userObject);
        }
    }, [onLoginSuccess]);

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div>
                {user ? (
                    <div>
                        <h2>Welcome, {user.name}</h2>
                        <img src={user.picture} alt="User Profile" />
                    </div>
                ) : (
                    <GoogleLogin
                        onSuccess={onSuccess}
                        onError={onFailure}
                    />
                )}
            </div>
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginButton;
