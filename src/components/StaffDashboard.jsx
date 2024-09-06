import React, { useState } from 'react';
import OPDFlowOverview from './OPDFlowOverview';
import PatientQueueManagement from './PatientQueueManagement';
import PredictiveAnalytics from './PredictiveAnalytics';
import Header from './Header' // Assume this is another component

const hospitals = [
  { id: 1, name: 'City Hospital', departments: ['Cardiology', 'Orthopedics', 'General'] },
  { id: 2, name: 'Metro Hospital', departments: ['Neurology', 'Pediatrics', 'General'] },
];

const StaffDashboard = () => {
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [filteredData, setFilteredData] = useState(null);

  const handleSearch = () => {
    const hospital = hospitals.find(h => h.name.toLowerCase() === selectedHospital.toLowerCase());
    if (hospital && hospital.departments.includes(selectedDepartment)) {
      setFilteredData({ hospital, department: selectedDepartment });
    } else {
      setFilteredData(null); // Clear the data if no match
    }
  };

  return (
    <>
    <Header />
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-6">Hospital & Department Search</h1>

      {/* Search Input for Hospital and Department */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter hospital name"
          className="p-2 border rounded mb-2 w-full"
          value={selectedHospital}
          onChange={(e) => setSelectedHospital(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter department"
          className="p-2 border rounded mb-2 w-full"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        />
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700 transition"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Conditional Rendering Based on Search */}
      {filteredData ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Showing Results for {filteredData.hospital.name} - {filteredData.department}</h2>
          
          {/* Components displaying dynamic data */}
          <OPDFlowOverview hospital={filteredData.hospital} department={filteredData.department} />
          <PatientQueueManagement hospital={filteredData.hospital} department={filteredData.department} />
          <PredictiveAnalytics hospital={filteredData.hospital} department={filteredData.department} />
        </>
      ) : (
        <p>No matching hospital or department found. Please try again.</p>
      )}
    </section>
    </>
  );
};

export default StaffDashboard;


