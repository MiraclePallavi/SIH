
// src/App.js
import React, { useState } from "react";
import Login from "./components/Login";
import PatientForm from "./components/PatientForm";
import OPDPage from "./components/OPDPage";
import StaffDashboard from "./components/StaffDashboard";

const App = () => {
  const [role, setRole] = useState("");
  const [isPatientFormFilled, setIsPatientFormFilled] = useState(false);
  const [patientInfo, setPatientInfo] = useState(null);

  const handleLogin = (userRole) => {
    setRole(userRole);
  };

  const handlePatientFormSubmit = (info) => {
    setPatientInfo(info);
    setIsPatientFormFilled(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* If no role is selected yet, show the Login form */}
      {!role ? (
        <Login onLogin={handleLogin} />
      ) : role === "patient" ? (
        // If the user is a patient, check if the form is filled or not
        !isPatientFormFilled ? (
          <PatientForm onSubmit={handlePatientFormSubmit} />
        ) : (
          // Show OPD Page after patient form submission
          <OPDPage patientInfo={patientInfo} />
        )
      ) : (
        // If the user is staff, show the staff dashboard
        <StaffDashboard />
      )}
    </div>
  );
};

export default App;
