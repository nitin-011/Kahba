import React from "react";
import './HighlightedWorks.css';
import { useNavigate } from 'react-router-dom';

const HighlightedWork = () => {
  const navigate = useNavigate();

  // Function to navigate to the works page
  const goToWorksPage = () => {
    navigate('/works');
  };

  return (
    <div className="highlighted-work-section">
      <h2 className="section-title">Highlighted Works</h2>

      <div className="work-gallery">
        {/* Project 1 */}
        <div className="work-item project-1" onClick={goToWorksPage}>
          <div className="work-overlay">
            <h3>Project 1</h3>
            <p>Description about Project 1</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="work-item project-2" onClick={goToWorksPage}>
          <div className="work-overlay">
            <h3>Project 2</h3>
            <p>Description about Project 2</p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="work-item project-3" onClick={goToWorksPage}>
          <div className="work-overlay">
            <h3>Project 3</h3>
            <p>Description about Project 3</p>
          </div>
        </div>

        {/* Project 4 */}
        <div className="work-item project-4" onClick={goToWorksPage}>
          <div className="work-overlay">
            <h3>Project 4</h3>
            <p>Description about Project 4</p>
          </div>
        </div>

        {/* Project 5 */}
        <div className="work-item project-5" onClick={goToWorksPage}>
          <div className="work-overlay">
            <h3>Project 5</h3>
            <p>Description about Project 5</p>
          </div>
        </div>

        {/* Project 6 */}
        <div className="work-item project-6" onClick={goToWorksPage}>
          <div className="work-overlay">
            <h3>Project 6</h3>
            <p>Description about Project 6</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightedWork;
