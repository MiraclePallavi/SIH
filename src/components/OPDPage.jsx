import React, { useState } from 'react';

const OPDPage = ({ patientInfo }) => {
    const [selectedDept, setSelectedDept] = useState('');
    const [selectedHospital, setSelectedHospital] = useState('');
    const [showAppointmentForm, setShowAppointmentForm] = useState(false);
    const [appointmentDetails, setAppointmentDetails] = useState({
        hospital: '',
        date: '',
        time: ''
    });

    // Hardcoded hospital-wise seat availability for OPD and beds by department
    const hospitalData = [
        { name: "City Hospital", opdSeats: { Cardiology: 10, Neurology: 8, Orthopedics: 15, Pediatrics: 12 }, bedAvailable: 50 },
        { name: "Metro Hospital", opdSeats: { Cardiology: 5, Neurology: 12, Orthopedics: 10, Pediatrics: 9 }, bedAvailable: 30 },
        { name: "Global Health Center", opdSeats: { Cardiology: 12, Neurology: 6, Orthopedics: 20, Pediatrics: 10 }, bedAvailable: 45 },
        { name: "Sunrise Hospital", opdSeats: { Cardiology: 8, Neurology: 7, Orthopedics: 12, Pediatrics: 14 }, bedAvailable: 40 },
        { name: "Sunrise Hospital", opdSeats: { Cardiology: 8, Neurology: 7, Orthopedics: 12, Pediatrics: 14 }, bedAvailable: 40 },
        { name: "Sunrise Hospital", opdSeats: { Cardiology: 8, Neurology: 7, Orthopedics: 12, Pediatrics: 14 }, bedAvailable: 40 },
        { name: "Sunrise Hospital", opdSeats: { Cardiology: 8, Neurology: 7, Orthopedics: 12, Pediatrics: 14 }, bedAvailable: 40 },
        { name: "Sunrise Hospital", opdSeats: { Cardiology: 8, Neurology: 7, Orthopedics: 12, Pediatrics: 14 }, bedAvailable: 40 }
    ];

    const handleDeptChange = (e) => {
        setSelectedDept(e.target.value);
    };

    const handleBookAppointment = (hospital) => {
        setSelectedHospital(hospital);
        setShowAppointmentForm(true);
    };

    const handleAppointmentSubmit = (e) => {
        e.preventDefault();
        alert(`Appointment booked at ${appointmentDetails.hospital} on ${appointmentDetails.date} at ${appointmentDetails.time}`);
        setShowAppointmentForm(false);
    };

    return (
        <div className="flex">
            {/* Main content area */}
            <div className="w-3/4 p-4">
                <h2 className="text-2xl font-bold mb-4">Select Department</h2>
                <div className="mb-4">
                    <select
                        value={selectedDept}
                        onChange={handleDeptChange}
                        className="border border-gray-300 p-2 rounded"
                    >
                        <option value="">Select Department</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Neurology">Neurology</option>
                        <option value="Orthopedics">Orthopedics</option>
                        <option value="Pediatrics">Pediatrics</option>
                    </select>
                </div>

                {/* Table to show hospital seat availability */}
                {selectedDept && (
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Hospital Name</th>
                                <th className="border border-gray-300 px-4 py-2">OPD Seats Available</th>
                                <th className="border border-gray-300 px-4 py-2">Beds Available</th>
                                <th className="border border-gray-300 px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hospitalData.map((hospital, index) => (
                                <tr key={index} className="text-center">
                                    <td className="border border-gray-300 px-4 py-2">{hospital.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{hospital.opdSeats[selectedDept]}</td>
                                    <td className="border border-gray-300 px-4 py-2">{hospital.bedAvailable}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button
                                            onClick={() => handleBookAppointment(hospital.name)}
                                            className="bg-blue-500 text-white py-1 px-2 rounded"
                                        >
                                            Book Appointment
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Patient info section on the right */}
            <div className="w-1/4 p-4 bg-gray-100 border-l border-gray-300">
                <h2 className="text-xl font-semibold mb-2">Patient Information</h2>
                <div className="space-y-2">
                    <p><strong>Name:</strong> {patientInfo.name}</p>
                    <p><strong>Age:</strong> {patientInfo.age}</p>
                    <p><strong>Condition:</strong> {patientInfo.condition}</p>
                    
                </div>
            </div>

            {/* Appointment Form Modal */}
            {showAppointmentForm && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-xl font-bold mb-4">Book Appointment at {selectedHospital}</h2>
                        <form onSubmit={handleAppointmentSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Date:</label>
                                <input
                                    type="date"
                                    className="border border-gray-300 p-2 rounded w-full"
                                    value={appointmentDetails.date}
                                    onChange={(e) => setAppointmentDetails({ ...appointmentDetails, date: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Time:</label>
                                <input
                                    type="time"
                                    className="border border-gray-300 p-2 rounded w-full"
                                    value={appointmentDetails.time}
                                    onChange={(e) => setAppointmentDetails({ ...appointmentDetails, time: e.target.value })}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded"
                            >
                                Confirm Appointment
                            </button>
                            <button
                                type="button"
                                className="bg-red-500 text-white py-2 px-4 ml-4 rounded"
                                onClick={() => setShowAppointmentForm(false)}
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OPDPage;


