import React, { useState } from 'react';

const OPDFlowOverview = () => {
  // Mock patient data
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe', status: 'Waiting', appointmentTime: '10:00 AM' },
    { id: 2, name: 'Jane Smith', status: 'In Consultation', appointmentTime: '10:30 AM' },
    { id: 3, name: 'Sam Wilson', status: 'Completed', appointmentTime: '11:00 AM' },
  ]);

  // Mock alerts/notifications
  const [alerts, setAlerts] = useState([
    { id: 1, message: 'John Doe has been waiting for over 30 minutes.' },
    { id: 2, message: 'New appointment added for Alex Johnson at 11:30 AM.' },
  ]);

  // Filter patients by status
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredPatients = patients.filter(patient => 
    statusFilter === 'All' || patient.status === statusFilter
  );

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-6">OPD Flow Overview</h2>

      {/* Patient Flow Summary */}
      <div className="mb-8">
        <h3 className="font-bold text-lg mb-4">Patient Flow Summary</h3>
        <div className="flex mb-4">
          <label className="mr-2">Filter by Status:</label>
          <select
            className="border p-2 rounded"
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Waiting">Waiting</option>
            <option value="In Consultation">In Consultation</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {filteredPatients.map(patient => (
            <div key={patient.id} className="bg-white p-4 shadow rounded">
              <h4 className="font-bold">{patient.name}</h4>
              <p>Status: {patient.status}</p>
              <p>Appointment Time: {patient.appointmentTime}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Alerts/Notifications */}
      <div>
        <h3 className="font-bold text-lg mb-4">Alerts/Notifications</h3>
        <div className="bg-white p-4 shadow rounded">
          {alerts.length === 0 ? (
            <p>No new alerts</p>
          ) : (
            alerts.map(alert => (
              <div key={alert.id} className="mb-2">
                <p className="text-red-500">{alert.message}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default OPDFlowOverview;
