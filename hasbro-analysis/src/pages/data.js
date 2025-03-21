import React from "react";
import Navbar from "../components/navbar";
import "../styles/style.css"; // Import CSS

const DataAnalytics = () => {
  return (
    <div>
      <Navbar /> {/* Include Navbar */}
      
      <div className="analytics-container">
        <h1>Data Analytics</h1>
        <p>Explore insights and trends from Hasbro's most popular toys, games, and collectibles.</p>

        {/* Placeholder for Data Visualizations */}
        <div className="data-visuals">
          <p> Data visualizations will be displayed here.</p>
        </div>
      </div>
    </div>
  );
};

export default DataAnalytics;