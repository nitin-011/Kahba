import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu
import kahbalogo from "../../assets/kahbalogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img src={kahbalogo} alt="Kahba Logo" height={'50px'} width={'50px'} />
        </Link>
      </div>
      <div className={`nav-links ${isOpen ? "active" : ""}`}> {/* Toggle class for mobile */}
        <Link to="/about">About us</Link>
        <Link to="/ourwork">Work</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/tkc">TKC</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />} {/* Hamburger icon */}
      </div>

      <style jsx>{`
        .nav {
          position: fixed;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: transparent;
          color: white;
          width: 100%;
          padding: 0 1rem; /* Add some padding to the sides */
        }

        .logo {
          margin-top: 0.5rem;
        }

        .nav-links {
          padding-left: 25rem;
          display: flex;  /* Keep this visible for desktop */
          font-weight: 500;
        }

        .nav-links a {
          padding-left: 5rem;
          margin: 0 16px;
          font-size: 1.125rem;
          color: white;
          text-decoration: none;
        }

        .nav-links a:hover {
          color: #FBBF24; /* Equivalent to hover:text-yellow-500 */
        }

        /* Hamburger menu is hidden for desktop */
        .hamburger {
          display: none;
        }

        /* Tablet and Mobile View */
        @media (max-width: 1024px) {
          .nav-links a {
            padding-left: 1.5rem;
            font-size: 1rem;
          }
        }

        /* Mobile View */
        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.8); /* Dark background for mobile dropdown */
            display: none; /* Hidden by default for mobile */
          }

          .nav-links.active {
            display: flex; /* Show the menu when active */
          }

          .nav-links a {
            padding: 1rem;
            width: 100%;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }

          .hamburger {
            display: block; /* Show hamburger for mobile */
            margin-right: 2rem;
            cursor: pointer;
            color: white; /* White color for hamburger icon */
          }

          .logo {
            margin-left: 1rem; /* Ensure logo stays on the left */
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
