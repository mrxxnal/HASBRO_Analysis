import React from "react";
import MarqueeText from "./marqueetext";

const Hero = () => {
  return (
    <section className="hero">
      <h1>Welcome to Hasbro Analysis</h1>
      <MarqueeText />
      <button className="cta-btn">Explore Data</button>
    </section>
  );
};

export default Hero;

