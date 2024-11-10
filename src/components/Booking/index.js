// src/components/Booking.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import './index.css';

function Booking() {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/booking-details');
  };

  return (
    <section className="booking-section">
      <div className="booking-content">
        <div className="booking-text">
          <h2>Work from <br /> Ladakh</h2>
          <p>India's first true digital tourism ecosystem</p>
          <div className="social-icons">
            <FaFacebook className='icon' />
            <FaInstagramSquare className='icon' />
          </div>
        </div>
        <div className="booking-image">
          <img src="https://images.blacktomato.com/2024/07/Ladakh3.jpg" alt="Work from Ladakh" className="image" />
        </div>
      </div>
      <div className="booking-form">
        <div className="form-group">
          <label>Check-in</label>
          <input type="date" className="input" />
        </div>
        <div className="form-group">
          <label>Check-out</label>
          <input type="date" className="input" />
        </div>
        <div className="form-group">
          <label>Rooms</label>
          <input type="number" className="input" min="1" defaultValue="1" />
        </div>
        <button className="book-button" onClick={handleBooking}>Book</button>
      </div>
    </section>
  );
}

export default Booking;
