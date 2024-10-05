// FeaturesPage.js
import React from "react";
import "../styles/FeaturesPage.css";

const cartoons = [
  {
    name: "Mickey Mouse",
    description:
      "Mickey Mouse is the cheerful and optimistic character who always gets into adventures. A true icon of animation!",
    image:
      "https://i.pinimg.com/564x/e7/34/7a/e7347a843ce994eae9d4e6339f52aa1b.jpg",
    streaming: "Disney+",
  },
  {
    name: "Bugs Bunny",
    description:
      "Bugs Bunny is a clever rabbit known for his wisecracks and iconic catchphrase, 'What's up, Doc?'",
    image:
      "https://i.pinimg.com/564x/81/89/2c/81892c83b5ce6c31ba7f560cf767ac43.jpg",
    streaming: "HBO Max",
  },
  {
    name: "Scooby-Doo",
    description:
      "Scooby-Doo and the gang solve mysteries in their Mystery Machine while encountering spooky villains.",
    image:
      "https://i.pinimg.com/564x/07/c1/45/07c1453d34a1875f01eb7ec02936f5ed.jpg",
    streaming: "Netflix",
  },
  {
    name: "Tom and Jerry",
    description:
      "Tom and Jerry engage in endless chases, filled with slapstick comedy and unforgettable moments.",
    image:
      "https://i.pinimg.com/564x/3b/c0/49/3bc04997a108ec8700bce15787fb092b.jpg",
    streaming: "HBO Max",
  },
];

const FeaturesPage = () => {
  return (
    <div className="features-page">
      <h1 className="features-title">Cartoon Classics That Make Us Smile!</h1>
      <div className="features-container">
        {cartoons.map((cartoon, index) => (
          <div key={index} className="feature-card">
            <img
              src={cartoon.image}
              alt={cartoon.name}
              className="feature-image"
            />
            <h2 className="cartoon-name">{cartoon.name}</h2>
            <p className="cartoon-description">{cartoon.description}</p>
            <p className="streaming-info">
              Watch it on:{" "}
              <span className="streaming-platform">{cartoon.streaming}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
