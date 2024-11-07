import React from 'react';
import './3pillars.css'; // Import the CSS file
import { Link } from 'react-router-dom'; // Import the Link component
const PillarsSection = () => {
  return (
    <div className="pillars-section">
      <h1 className="section-title">PILLARS OF OUR PROCESS</h1>
      
      <div className="pillars-container">
        <div className="pillar">
          <h2 className="pillar-title">PEOPLE</h2>
          <p className="pillar-text">
            The team at Kahba Design Studio is a passionate group of creative professionals 
            dedicated to transforming spaces with innovative design solutions, meticulous attention 
            to detail, and a commitment to excellence.
          </p>
        </div>

        <div className="pillar">
          <h2 className="pillar-title">BELIEF</h2>
          <p className="pillar-text">
            At Kahba Design Studio, we believe in the power of thoughtful design to create inspiring 
            spaces that resonate with beauty, functionality, and the unique vision of our clients.
          </p>
        </div>

        <div className="pillar">
          <h2 className="pillar-title">ARCHITECTURE</h2>
          <p className="pillar-text">
            Kahba Design Studio approaches architecture with a blend of creativity and precision, 
            pursuing designs that harmonize aesthetics and functionality, while staying true to the 
            unique essence of each project.
          </p>
        </div>
      </div>
      <Link to = '/about'>
      <button className="know-more-button">KNOW MORE</button>
      </Link>
    </div>
  );
};

export default PillarsSection;
