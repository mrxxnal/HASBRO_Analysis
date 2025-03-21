import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { loadData } from "../utils/dataloader";
import "chart.js/auto";

const DataVisualization = () => {
  const [chartData, setChartData] = useState(null);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    loadData().then((data) => {
      // Clean the data: convert price and rating to numbers
      const cleanedData = data
        .map((d) => ({
          ...d,
          price: parseFloat(d.price) || 0,
          rating: parseFloat(d.rating) || 0,
        }))
        // Use only products with a rating between 3 and 5
        .filter((d) => d.rating >= 3 && d.rating <= 5);

      // Set up bins for ratings 3.00 to 5.00
      const numBins = 8;
      const binSize = (5 - 3) / numBins; // 0.25 per bin
      const bins = new Array(numBins).fill(null).map(() => ({ count: 0, titles: [] }));

      cleanedData.forEach((product) => {
        const r = product.rating;
        if (r >= 3 && r <= 5) {
          const binIndex = Math.min(Math.floor((r - 3) / binSize), numBins - 1);
          bins[binIndex].count++;
          bins[binIndex].titles.push(product.title);
        }
      });

      // Create labels for each bin (e.g., "3.00-3.25", "3.25-3.50", etc.)
      const binLabels = [];
      for (let i = 0; i < numBins; i++) {
        const lower = (3 + i * binSize).toFixed(2);
        const upper = (3 + (i + 1) * binSize).toFixed(2);
        binLabels.push(`${lower}-${upper}`);
      }

      // Prepare chart data for the Pie chart
      const dataForChart = {
        labels: binLabels,
        datasets: [
          {
            label: "Product Ratings Distribution",
            data: bins.map((b) => b.count),
            backgroundColor: [
              "#ff595e",
              "#ff7f50",
              "#ff924c",
              "#ffca3a",
              "#8ac926",
              "#66d9e8",
              "#1982c4",
              "#6a4c93",
            ],
          },
        ],
      };

      // Configure options to display detailed tooltips
      const optionsForChart = {
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                const index = context.dataIndex;
                const titles = bins[index].titles;
                let label =
                  context.label +
                  ": " +
                  context.formattedValue +
                  " products";
                if (titles && titles.length > 0) {
                  let displayTitles = titles.slice(0, 3).join(", ");
                  if (titles.length > 3) {
                    displayTitles += `, ... (${titles.length - 3} more)`;
                  }
                  label += "\n" + displayTitles;
                }
                return label;
              },
            },
          },
        },
      };

      setChartData(dataForChart);
      setChartOptions(optionsForChart);
    });
  }, []);

  if (!chartData) {
    return (
      <p style={{ color: "white", textAlign: "center" }}>
        Loading ratings data...
      </p>
    );
  }

  return (
    <div className="data-page">
      <h2>Amazon Hasbro Products - Rating Distribution (3.00 to 5.00)</h2>
      <div className="chart-container">
        <Pie data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default DataVisualization;