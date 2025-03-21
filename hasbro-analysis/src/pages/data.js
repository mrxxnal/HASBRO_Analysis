import React from "react";
import Navbar from "../components/navbar";
import DataVisualization from "../components/DataVisualization";
import "../styles/style.css"; // Import CSS

const DataAnalytics = () => {
  return (
    <div>
      <Navbar />
      <div className="analytics-container">
        <h1>Data Analytics</h1>

        {/* Include Interactive Data Visualizations */}
        <DataVisualization />
      </div>
    </div>
  );
};

export default DataAnalytics;