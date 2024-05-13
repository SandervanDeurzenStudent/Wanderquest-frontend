import React, { useState } from 'react';
import Speakeasy from 'speakeasy';
import QRCode from 'qrcode.react';

const TwoFactorAuth = () => {
    const [secret, setSecret] = useState('');
    const [qrCodeUrl, setQrCodeUrl] = useState('');

    const generateSecret = () => {
        const newSecret = Speakeasy.generateSecret({ length: 20 });
        console.log(newSecret);
        setSecret(newSecret.base32);

        const url = Speakeasy.otpauthURL({
            secret: newSecret.ascii,
            label: 'MyReactApp',
            issuer: 'MyCompany'
        });
        setQrCodeUrl(url);
    };

    return (
        <div>
            {secret === '' ? (
                <button onClick={generateSecret}>Generate Secret</button>
            ) : (
                <div>
                    <QRCode value={qrCodeUrl} />
                    <p>Scan this QR code with Google Authenticator</p>
                    <p>Secret Key: {secret}</p>
                </div>
            )}
        </div>
    );
};

export default TwoFactorAuth;
