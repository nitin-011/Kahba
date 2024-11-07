import React from 'react';
import './footer.css'; // Import the CSS file
import logo from '../../assets/logo.png'; // Replace with your logo path
import quoteImage from '../../assets/quoteimage2.png'; // Replace with your quote image path
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Icons for social media

const Footer = () => {
  return (
    <div className="footer">
      {/* Left Section */}
      <div className="footer-left">
        <img src={logo} alt="Kahba Logo" className="logo" />
        <div className="quote-section">
          <img src={quoteImage} alt="Quote" className="quote-image" />
          <p>CRAFTING SPACES, INSPIRING LIVES</p>
        </div>
        <div className="social-icons">
          <FaInstagram className="icon" />
          <FaLinkedin className="icon" />
          <FaEnvelope className="icon" />
          <FaPhoneAlt className="icon" />
        </div>
      </div>

      {/* Middle Section */}
      <div className="footer-middle">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>PRIVACY POLICY</li>
          <li>COPYRIGHT</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="footer-right">
        <div className="contact-info">
          <p><strong>Address:</strong> JQW2+VP2, Gmada Aerocity, Chachu Majra, Punjab 140306</p>
          <p><strong>Email:</strong> kahbadesignstudio@gmail.com</p>
          <p><strong>Phone:</strong> 8585984111</p>
          <p><strong>Location:</strong> Mohali, Chandigarh</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54908.83172945944!2d76.67466090418857!3d30.66770405133338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb513f26dfdb%3A0x82d0dddfea68b940!2sKAHBA%20Design%20Studio!5e0!3m2!1sen!2sin!4v1727760236963!5m2!1sen!2sin" width="60px" height="45px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Footer;
