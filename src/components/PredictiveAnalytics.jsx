import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

// Example Data for Patient Arrival Predictions and Historical Data
const arrivalPredictionData = [
  { time: '8 AM', patients: 5 },
  { time: '9 AM', patients: 15 },
  { time: '10 AM', patients: 20 },
  { time: '11 AM', patients: 25 },
  { time: '12 PM', patients: 10 },
  { time: '1 PM', patients: 30 },
  { time: '2 PM', patients: 45 },
];

const historicalData = [
  { day: 'Monday', waitTime: 30 },
  { day: 'Tuesday', waitTime: 45 },
  { day: 'Wednesday', waitTime: 35 },
  { day: 'Thursday', waitTime: 50 },
  { day: 'Friday', waitTime: 40 },
  { day: 'Saturday', waitTime: 60 },
];

const PredictiveAnalytics = () => {
  return (
    <section className="p-8">
      <h2 className="text-4xl font-bold mb-4 text-center ">Analytics</h2>

      {/* Flex container for Patient Arrival Predictions and Historical Data */}
      <div className="flex flex-wrap gap-16 mb-8 mt-10">
        
        {/* Patient Arrival Predictions */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4 ml-8">Patient Arrival Predictions</h3>
          <LineChart
            width={500}
            height={300}
            data={arrivalPredictionData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="patients" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </div>

        {/* Historical Data */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4 ml-8">Historical Data on Patient Flow & Wait Times</h3>
          <BarChart
            width={500}
            height={300}
            data={historicalData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="waitTime" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>

    </section>
  );
};

export default PredictiveAnalytics;
