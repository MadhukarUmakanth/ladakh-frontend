import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

function OrderComplete() {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, email, phone, adults, children, checkIn, checkOut, rooms } = location.state || {};

  // Base amount per room
  const baseAmountPerRoom = 12430;
  
  // Calculate the total amount based on the number of rooms
  const amount = baseAmountPerRoom * rooms;

  const goHome = () => {
    navigate('/');
  };

  return (
    <div>
      <Header onClick={goHome} />
      <div className="order-complete">
        <div className="order-details">
          <div className="user-info">
            <h3>{name}</h3>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{adults} Adult{adults > 1 ? 's' : ''} and {children} Child{children > 1 ? 'ren' : ''}</p>
          </div>
          
          <div className="order-status">
            <div className="status-icon">
              &#10003;
            </div>
            <div className="status-text">
              <h3>Order Complete</h3>
              <p>Have questions? <a href="#">Contact us</a></p>
            </div>
          </div>
        </div>

        <div className="booking-summary">
          <div className="booking-detail">
            <p>CHECK-IN</p>
            <strong>{checkIn}</strong>
          </div>
          <div className="booking-detail">
            <p>CHECK-OUT</p>
            <strong>{checkOut}</strong>
          </div>
          <div className="booking-detail">
            <p>ROOMS</p>
            <strong>{rooms}</strong>
          </div>
          <button className="amount-button">₹ {amount.toLocaleString()}</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderComplete;
