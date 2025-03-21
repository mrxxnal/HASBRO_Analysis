import React from "react";
import Navbar from "../components/navbar";
import StockChart from "../components/StockChart"; // Import the stock chart
import DataVisualization from "../components/DataVisualization";
import "../styles/style.css"; // Import CSS

const DataAnalytics = () => {
  return (
    <div>
      <Navbar />
      <div className="analytics-container">
        <h1>Data Analytics</h1>

        <StockChart /> {/* ✅ Display the stock chart */}

        {/* Include Interactive Data Visualizations */}
        <DataVisualization />

      </div>
    </div>
  );
};

export default DataAnalytics;