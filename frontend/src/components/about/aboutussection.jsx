import React from 'react';
import './aboutussection.css';  // Importing CSS for styling
import quoteImage from '../../assets/quoteimage.png'; // Import the image of double quotes
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <div className="about-section" id='#about'>
      <div className="quote-container">
        <img src={quoteImage} alt="Quote" className="quote-image" />
        <p className="about-text">
          At Kahba Design Studio, we craft environments that blend creativity with functionality. 
          Our designs tell stories, enhance spaces, and serve practical needs. We deeply understand our 
          clients' visions, delivering visually striking, purposeful spaces that inspire. With every project, 
          we strive to exceed expectations, push creative boundaries, and create spaces that truly resonate.
        </p>
      </div>
      <div className='know-more'>
        <Link to='/about' >
        <button className="know-more-button">KNOW MORE</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
