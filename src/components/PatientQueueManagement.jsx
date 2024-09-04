import React, { useState } from 'react';

const patientsData = [
  { id: 1, name: 'John Doe', status: 'In Queue', urgency: 'High', waitTime: 15, department: 'Cardiology' },
  { id: 2, name: 'Jane Smith', status: 'In Consultation', urgency: 'Low', waitTime: 5, department: 'General' },
  { id: 3, name: 'Sam Wilson', status: 'In Queue', urgency: 'Medium', waitTime: 10, department: 'Orthopedics' },
];

const PatientQueueManagement = () => {
  const [filter, setFilter] = useState('');
  const [patients, setPatients] = useState(patientsData);
  const [sortType, setSortType] = useState('urgency'); // Sorting by urgency by default

  // Function to handle sorting
  const handleSort = (type) => {
    const sortedPatients = [...patients].sort((a, b) => {
      if (type === 'waitTime') return a.waitTime - b.waitTime;
      if (type === 'urgency') return a.urgency.localeCompare(b.urgency);
      return a.name.localeCompare(b.name);
    });
    setPatients(sortedPatients);
    setSortType(type);
  };

  // Function to adjust queue (mock functionality)
  const adjustQueue = (id) => {
    setPatients((prevPatients) =>
      prevPatients.map((patient) =>
        patient.id === id ? { ...patient, status: 'In Consultation' } : patient
      )
    );
  };

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-6">Patient Queue Management</h2>
      
      {/* Filter input */}
      <div className="mb-4">
        <input 
          type="text"
          placeholder="Filter by urgency or department"
          className="p-2 border rounded w-full"
          onChange={(e) => setFilter(e.target.value.toLowerCase())}
        />
      </div>

      {/* Sort options */}
      <div className="mb-4">
        <label className="mr-2">Sort by:</label>
        <select className="p-2 border rounded" value={sortType} onChange={(e) => handleSort(e.target.value)}>
          <option value="urgency">Urgency</option>
          <option value="waitTime">Wait Time</option>
          <option value="name">Name</option>
        </select>
      </div>

      {/* Patient List */}
      <ul>
        {patients
          .filter(patient => 
            patient.urgency.toLowerCase().includes(filter) || 
            patient.department.toLowerCase().includes(filter)
          )
          .map(patient => (
          <li key={patient.id} className={`bg-white p-4 shadow rounded mb-4 ${patient.urgency === 'High' ? 'border-red-500 border-2' : ''}`}>
            <h3 className="font-bold text-lg">{patient.name}</h3>
            <p>Status: {patient.status}</p>
            <p>Urgency: <span className={`font-bold ${patient.urgency === 'High' ? 'text-red-600' : patient.urgency === 'Medium' ? 'text-yellow-500' : 'text-green-600'}`}>{patient.urgency}</span></p>
            <p>Wait Time: {patient.waitTime} mins</p>
            <p>Department: {patient.department}</p>
            <button 
              onClick={() => adjustQueue(patient.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700 transition"
              disabled={patient.status !== 'In Queue'}
            >
              Adjust Queue
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PatientQueueManagement;
