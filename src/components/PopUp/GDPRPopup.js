import React, { useState } from 'react';
import './GDPRPopup.css';

const GDPRPopup = ({ onAccept }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="gdpr-popup">
            <div className="gdpr-popup-content">
                <h2>GDPR Terms and Conditions</h2>
                <p>Please accept our GDPR terms and conditions to continue using the site.</p>
                <button onClick={handleExpand}>
                    {isExpanded ? 'Hide Details' : 'Read More'}
                </button>
                {isExpanded && (
                    <div className="gdpr-details">
                        <h3>Privacy Policy</h3>
                        <p>
                            This is a sample privacy policy text. It should include all necessary information
                            regarding how user data is collected, processed, and stored in compliance with GDPR.
                            Please make sure to replace this with your actual privacy policy and terms and conditions.
                        </p>
                        <h3>Data Collection</h3>
                        <p>
                            Information about the types of data you collect from users and the purposes for which
                            the data is used.
                        </p>
                        <h3>User Rights</h3>
                        <p>
                            Description of user rights under GDPR, such as the right to access, rectify, and delete
                            their personal data.
                        </p>
                        <h3>Contact Information</h3>
                        <p>
                            Provide contact details for users to reach out with questions or concerns regarding
                            their data privacy.
                        </p>
                    </div>
                )}
                <button onClick={onAccept}>Accept</button>
            </div>
        </div>
    );
};

export default GDPRPopup;
