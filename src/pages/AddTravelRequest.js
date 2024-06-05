import React, { useState } from 'react';
import './AddUserPage.css'; // Zorg ervoor dat je de CSS importeert

const AddTravelRequestPage = () => {
    const [purpose, setPurpose] = useState('');
    const [customer, setCustomer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <div className="form-container">
            <h1>Add Travel Requests</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Purpose of Trip</label><br/>
                    <input
                        type="text"
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Customer</label><br/>
                    <input
                        type="text"
                        value={customer}
                        onChange={(e) => setCustomer(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Request</button>
            </form>
        </div>
    );
};

export default AddTravelRequestPage;
