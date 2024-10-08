// src/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = ({ user }) => {
  const [data, setData] = useState(null);
  user = {
    "name": "Sample"
  }

  useEffect(() => {
    axios.get('https://api.example.com/data')  // Replace with an actual API
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'User Engagement',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">My Courses</h2>
          <ul>
            <li className="py-2 border-b">Course 1</li>
            <li className="py-2 border-b">Course 2</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Analytics</h2>
          <Bar data={chartData} />
        </div>
      </div>
      {data && <div className="mt-6">{JSON.stringify(data)}</div>}
    </div>
  );
};

export default Dashboard;
