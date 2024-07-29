
import React, { useState } from 'react';
import './PatientRegistration.scss';

const PatientRegistration = () => {
  const [selectedPatient, setSelectedPatient] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedPatient);
  };

  return (
    <div className="patient-registration">
      <h1>Patient Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={selectedPatient.name} onChange={(e) => setSelectedPatient({...selectedPatient, name: e.target.value })} />
        </label>
        <label>
          Email:
          <input type="email" value={selectedPatient.email} onChange={(e) => setSelectedPatient({...selectedPatient, email: e.target.value })} />
        </label>
        <label>
          Phone:
          <input type="tel" value={selectedPatient.phone} onChange={(e) => setSelectedPatient({...selectedPatient, phone: e.target.value })} />
        </label>
        <label>
          Address:
          <textarea value={selectedPatient.address} onChange={(e) => setSelectedPatient({...selectedPatient, address: e.target.value })} />
        </label>
        <button type="submit">Register Patient</button>
      </form>
    </div>
  );
};

export default PatientRegistration;