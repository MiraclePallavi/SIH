// src/components/PatientForm.js
import React, { useState } from "react";

const PatientForm = ({ onSubmit }) => {
  const [patientInfo, setPatientInfo] = useState({
    name: "",
    age: "",
    condition: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo({ ...patientInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(patientInfo); // Send patient info to the parent component
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg w-96">
        <h1 className="text-2xl mb-4">Patient Information</h1>

        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={patientInfo.name}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Age:</label>
          <input
            type="number"
            name="age"
            value={patientInfo.age}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Condition:</label>
          <input
            type="text"
            name="condition"
            value={patientInfo.condition}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PatientForm;
