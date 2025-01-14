import React, { useState, useEffect } from "react";
import kahbagraphic from "../../assets/kahbagraphic.png";
import Navbar from "../navbar/Navbar";
import buttongraphic from "../../assets/buttongraphic.png";
import "./home.css"; // Import the CSS file
import { Link } from "react-router-dom";

// Array of image URLs from Cloudinary
const images = [
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1736845796/image1_ksqx0s.jpg",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1736845796/image2_m2tvuz.jpg",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1736845797/image3_brxviq.jpg",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1736845797/image4_oin9g1.jpg",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1736845797/image5_toxvpg.jpg",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1736845797/image6_gqw4r9.jpg",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1736845798/image7_pypjrp.jpg",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1736845799/image8_o3ghy3.jpg",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1736845799/image9_z1ctet.jpg",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1736845800/image10_srig9x.jpg",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 60); // Change image every 3 seconds
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
        <p className="text">At Kahba, we make space for design.</p>
        <Link to="/contact">
          <button className="button">
            <img src={buttongraphic} alt="button" className="botton" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

