import React from "react";
import "../styles/App.css";
import "../styles/AboutSection.css";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About ToonTown Vibes</h2>
      <div className="about-content">
        <p className="about-text">
          Step into a world where your favorite cartoon memories come to life!
          <span className="highlight">
            {" "}
            Mickey Mouse, Bugs Bunny, Scooby-Doo,{" "}
          </span>
          and many more are waiting to make you smile just like in the good ol'
          days.
        </p>
        <p className="about-text">
          ToonTown Vibes is your one-stop destination for reliving your
          childhood
          <span className="highlight">
            {" "}
            Saturday morning cartoon marathons{" "}
          </span>
          and discovering fun facts, trivia, and hidden gems from the cartoon
          universe.
        </p>
        <div className="nostalgic-icons">
          <img
            src="https://i.pinimg.com/236x/7b/e6/af/7be6af51d6839837857e3aa9b279097f.jpg"
            alt="Mickey Mouse"
            className="icon mickey"
          />
          <img
            src="https://i.pinimg.com/564x/86/e3/7a/86e37a23fa5057ca693cdb342194fc97.jpg"
            alt="Bugs Bunny"
            className="icon bugs"
          />
          <img
            src="https://i.pinimg.com/564x/51/3f/ed/513fed93aa8cd637afa6fd24c1199751.jpg"
            alt="Scooby-Doo"
            className="icon scooby"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
