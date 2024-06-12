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
                            We collect various types of data from users for specific purposes. This includes but is not limited to:
                            - Personal information (e.g., name, email address) for registration and communication purposes.
                            - Usage data (e.g., IP address, browser information) for analytics and optimization of our services.
                            - Cookies and similar technologies for tracking user interactions and preferences.
                        </p>

                        <h3>Legal Basis for Processing</h3>
                        <p>
                            We process user data based on the following legal grounds:
                            - Consent: When users provide explicit consent for specific processing activities.
                            - Contractual necessity: When data processing is necessary for the performance of a contract with the user.
                            - Legal obligations: When processing is required to comply with applicable laws and regulations.
                            - Legitimate interests: When processing is necessary for our legitimate interests or those of third parties, provided it does not override users' fundamental rights and freedoms.
                        </p>

                        <h3>User Rights</h3>
                        <p>
                            Users have certain rights regarding their personal data under the GDPR. These include:
                            - Right to access: Users can request access to their personal data held by us.
                            - Right to rectification: Users can request correction of inaccurate or incomplete data.
                            - Right to erasure: Users can request deletion of their data under certain circumstances.
                            - Right to object: Users can object to certain types of data processing, such as direct marketing.
                            - Right to data portability: Users can request their data in a structured, commonly used, and machine-readable format.
                        </p>

                        <h3>Security Measures</h3>
                        <p>
                            We implement appropriate technical and organizational measures to ensure the security and confidentiality of user data. This includes:
                            - Encryption of data during transmission and storage.
                            - Access controls and authentication mechanisms to limit access to authorized personnel.
                            - Regular security assessments and audits to identify and address vulnerabilities.
                        </p>

                        <h3>Contact Information</h3>
                        <p>
                            For any questions or concerns regarding data privacy or GDPR compliance, users can contact us at [contact email/phone number].
                        </p>
                    </div>
                )}
                <button onClick={onAccept}>Accept</button>
            </div>
        </div>
    );
};

export default GDPRPopup;
