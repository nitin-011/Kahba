import React, { useState, useEffect } from "react";
import kahbagraphic from "../../assets/kahbagraphic.png";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";
import image9 from "../../assets/image9.jpg";
import image10 from "../../assets/image10.jpg";
import Navbar from "../navbar/Navbar";
import buttongraphic from "../../assets/buttongraphic.png";
import "./home.css"; // Import the CSS file
import { Link } from "react-router-dom";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 30); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${images[currentIndex]})`, // Set the image using the correct url() format
      }}
    >
      {/* Navbar */}
      <Navbar />
      {/* Overlay with text and button */}
      <div className="overlay">
        <img src={kahbagraphic} alt="Kahba Graphic" className="kahba-image" />
        <p className="text">
          At Kahba, we make space for design.
        </p>
        <Link to="/contact">
        <button className="button">
          <img src={buttongraphic} alt='button' className="botton" />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

