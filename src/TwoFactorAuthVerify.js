import React, { useState } from 'react';
import Speakeasy from 'speakeasy';

const TwoFactorAuthVerify = ({ secret }) => {
    const [code, setCode] = useState('');
    const [verified, setVerified] = useState(false);

    const handleVerify = () => {
        const isValid = Speakeasy.totp.verify({
            secret: secret,
            encoding: 'base32',
            token: code,
            window: 1 // Window of 1 allows for time skew of 30 seconds in either direction
        });
        setVerified(isValid);
    };

    return (
        <div>
            <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter 2FA code"
            />
            <button onClick={handleVerify}>Verify</button>
            {verified ? <p>2FA code is valid!</p> : <p>Invalid 2FA code</p>}
        </div>
    );
};

export default TwoFactorAuthVerify;
