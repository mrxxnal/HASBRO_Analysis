import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import MarqueeText from "./components/marqueetext";
import DataAnalytics from "./pages/data"; // Import the Data Analytics page

import "./styles/style.css"; // Ensure correct path

function App() {
  return (
    <>
      <Navbar />
      <MarqueeText />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/data" element={<DataAnalytics />} />
      </Routes>
    </>
  );
}

export default App;