// src/components/Login.js
import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [userRole, setUserRole] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (userRole === "patient" || userRole === "staff") {
      onLogin(userRole); // Log in as either patient or staff
    } else {
      alert("Please select a valid role (Patient or Staff)");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-2xl mb-4">Login</h1>
        <div className="mb-4">
          <label className="block mb-2">Select Role:</label>
          <select
            className="border p-2 w-full"
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="patient">Patient</option>
            <option value="staff">Staff</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
