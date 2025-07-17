'use client';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: [
    'JavaScript',
    'React.js',
    'Angular',
    'Node.js',
    'Django',
    'MongoDB',
    'Tailwind CSS',
  ],
  datasets: [
    {
      label: 'Skill Proficiency (%)',
      data: [90, 85, 73, 80, 69, 72, 85],
      backgroundColor: 'rgba(34, 211, 238, 0.2)',
      borderColor: 'rgba(34, 211, 238, 1)',
      borderWidth: 2,
    },
  ],
};

export const options = {
  scales: {
    r: {
      angleLines: { color: '#888' },
      grid: { color: '#444' },
      pointLabels: {
        color: '#fff',
        font: { size: 14 },
      },
      ticks: {
        backdropColor: 'transparent',
        color: '#fff',
        beginAtZero: true,
        stepSize: 20,
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: '#fff',
        font: { size: 12 },
      },
    },
  },
};

export default function RadarChart() {
  return (
    <div className="w-full max-w-md mx-auto my-10 p-6 rounded-xl shadow-lg border border-gray-600">
      <h2 className="text-center text-xl font-bold mb-4 text-white">
        Tech Stack Proficiency
      </h2>
      <Radar data={data} options={options} />
    </div>
  );
}
