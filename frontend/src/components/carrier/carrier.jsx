import React, { useState } from 'react';
import axios from 'axios';
import './carrier.css';

const CarrierUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('phone', formData.phone);
    data.append('email', formData.email);
    data.append('resume', formData.resume);
    console.log('Submitting data:', data);


    try {
      await axios.post('http://localhost:5000/api/carrier', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Resume submitted successfully!');
    } catch (error) {
      alert('Error submitting the resume');
    }
  };

  return (
    <div className="contact-us-page">
      {/* Header */}

      {/* Contact Form Section */}
      <div className="form-section">
        <h2>WANT TO WORK WITH US</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email id" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <input 
            type="file" 
            name="resume" 
            accept=".pdf,.doc,.docx" 
            onChange={handleFileChange}
            required 
          />
          <button type="submit" className="upload-button">UPLOAD YOUR RESUME</button>
        </form>
      </div>

    </div>
  );
};

export default CarrierUs;
