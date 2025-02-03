import React, { useState, useEffect } from "react";
import kahbagraphic from "../../assets/kahbagraphic.png";
import Navbar from "../navbar/Navbar";
import buttongraphic from "../../assets/buttongraphic.png";
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

const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    transition: 'all 1s',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    padding: '40px',
    justifyContent: 'center',

  },
  kahbaImage: {
    height: '16rem',
    width: '48rem',
    marginTop: '10rem',
    alignSelf: 'left',
  },
  text: {
    color: 'white',
    fontSize: '1.25rem',
    fontWeight: 500,
    textAlign: 'center',
  },
  button: {
    height: '6rem',
    width: '12rem',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    marginTop: '20px',
    alignSelf: 'right',
  },
  buttonDiv: {
    display: 'flex',
    justifyContent: 'right',
    paddingRight: '10vw',
    width: '100%',
  }
};

const mobileStyles = {
  container: {
    ...styles.container,
  },
  overlay: {
    ...styles.overlay,
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kahbaImage: {
    height: '12rem',
    width: '20rem',
    marginTop: '0',
  },
  text: {
    ...styles.text,
    fontSize: '1rem',
    margin: '1rem 0',
  },
  button: {
    ...styles.button,
    height: '6rem',
    width: '10rem',
  },
};

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const currentStyles = isMobile ? mobileStyles : styles;

  return (
    <div
      className="responsive-bg"
      style={{
        ...currentStyles.container,
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Navbar />
      <div style={currentStyles.overlay}>
        <img
          src={kahbagraphic}
          alt="Kahba Graphic"
          style={currentStyles.kahbaImage}
        />
        <p style={currentStyles.text}>At Kahba, we make space for design.</p>
        <div style={currentStyles.buttonDiv}>
        <Link to="/contact">
          <button style={currentStyles.button}>
            <img
              src={buttongraphic}
              alt="button"
              style={{ width: '100%', height: '100%' }}
            />
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

