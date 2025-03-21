import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import MarqueeText from "./components/marqueetext";
import DataAnalytics from "./pages/data"; // Import the Data Analytics page
import Home from "./pages/home"; // Make sure you have this!

import "./styles/style.css"; // Ensure correct path

function App() {
  return (
    <Router>
      <Navbar />
      <MarqueeText /> {/* 🔥 This stays on all pages! */}
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/data" element={<DataAnalytics />} />
      </Routes>
    </Router>
  );
}

export default App;