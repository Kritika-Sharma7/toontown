import React from "react";
import "../styles/App.css";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to ToonTown Vibes</h1>
        <p className="hero-text">
          Where colors pop and cartoons make you smile harder than a kid.
          Nostalgia hits harder than your Monday!
        </p>
        <div className="cartoon-clouds">
          <img
            src="https://i.pinimg.com/564x/2f/6b/95/2f6b954e8ff6e533a2396e01fddee0f2.jpg"
            alt="Cartoon Cloud"
          />
          <img
            src="https://i.pinimg.com/564x/59/21/83/592183061459d5c8c3d8332ba268c058.jpg"
            alt="Cartoon Cloud"
          />
        </div>
        <div className="hero-buttons">
          <button className="explore-btn">Explore Cartoons</button>
          <button className="join-btn">Join the Fun</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
