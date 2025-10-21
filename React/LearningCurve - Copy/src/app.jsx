import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Chart.js imports
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function App() {
  // Random sample data for crowd density
  const labels = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM"];
  const data = {
    labels,
    datasets: [
      {
        label: "Crowd Density",
        data: labels.map(() => Math.floor(Math.random() * 100)), // random 0–100
        borderColor: "#1976d2",
        backgroundColor: "rgba(25, 118, 210, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 20 },
      },
    },
  };

  return (
    <div className="app">
      {/* Top Bar */}
      <div className="top-bar">
        <span className="temple-name">Dwarkadhish Temple</span>
        <span className="arrow">▼</span>
      </div>

      {/* Temple Image */}
      <img
        src="temple.jpeg"
        alt="Temple"
        className="temple-img"
      />

      {/* Book Slot Button */}
      <button className="book-btn">Book Slot</button>

      {/* Live Crowd Density */}
      <h3>Live Crowd Density</h3>
      <div className="chart">
        <Line data={data} options={options} />
      </div>

      {/* SOS Button */}
      <button className="sos-btn">SOS</button>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <span>🏠</span>
        <span>👤</span>
        <span>📍</span>
        <span>☰</span>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;