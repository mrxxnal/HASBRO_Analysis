import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import "./styles/style.css"; // Make sure this path is correct

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;