import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import "./styles/style.css";  // Ensure CSS is linked

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;