import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import Papa from "papaparse";

const StockChart = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    fetch("/HAS_stock_data.csv")
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          complete: (result) => {
            const parsedData = result.data
              .map((row) => ({
                date: row.index,
                close: row.close,
              }))
              .filter((d) => d.date && d.close);

            setStockData(parsedData);
          },
        });
      });
  }, []);

  return (
    <div>
      <h2>📈 Hasbro Stock Price Trend</h2>
      {stockData.length > 0 ? (
        <Plot
          data={[
            {
              x: stockData.map((d) => d.date),
              y: stockData.map((d) => d.close),
              type: "scatter",
              mode: "lines",
              marker: { color: "blue" },
            },
          ]}
          layout={{
            title: "Hasbro Stock Closing Prices",
            xaxis: { title: "Date" },
            yaxis: { title: "Closing Price ($)" },
          }}
        />
      ) : (
        <p>Loading stock data...</p>
      )}
    </div>
  );
};

export default StockChart;