import React, { useState } from "react";
import { Link } from "react-router-dom";  
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu
import kahbalogo from "../../assets/kahbalogo.png"; 
import "./Navbar.css"; 

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
    </div>
  );
};

export default Navbar;
