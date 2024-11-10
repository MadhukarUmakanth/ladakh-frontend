import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import "./index.css";

const BookingDetails = () => {
  const navigate = useNavigate();
  const BASE_PRICE_PER_ROOM = 12430; // Define the base price per room

  // State for form inputs and errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    adults: 2,
    children: 2,
    checkIn: '2022-02-01',
    checkOut: '2022-02-07',
    rooms: 1,
  });

  const [errors, setErrors] = useState({});

  // Calculate the total price based on the number of rooms
  const totalPrice = formData.rooms * BASE_PRICE_PER_ROOM;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error on change
  };

  // Handle room count changes
  const handleRoomChange = (operation) => {
    setFormData((prev) => ({
      ...prev,
      rooms: operation === "increment" ? prev.rooms + 1 : Math.max(1, prev.rooms - 1),
    }));
  };

  // Handle form submission and validate inputs
  const handleSubmit = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.checkIn) newErrors.checkIn = "Check-in date is required.";
    if (!formData.checkOut) newErrors.checkOut = "Check-out date is required.";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Update error state if there are any errors
    } else {
      navigate('/order-complete', { state: formData });
    }
  };
  
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <Header onClick={goToHome} />
      <div className="booking-container">
        {/* First Row: Name and Email */}
        <div className="personal-info">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        {/* Second Row: Phone Number, Adults, Children */}
        <div className="additional-info">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}

          <input
            type="number"
            name="adults"
            placeholder="Adults"
            value={formData.adults}
            onChange={handleChange}
            min="1"
          />
          <input
            type="number"
            name="children"
            placeholder="Children"
            value={formData.children}
            onChange={handleChange}
            min="0"
          />
        </div>

        {/* Booking Info: Check-In, Check-Out, Rooms */}
        <div className="booking-info">
          <div className="check-in">
            <label>CHECK-IN</label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
            />
            {errors.checkIn && <p className="error-message">{errors.checkIn}</p>}
          </div>
          <div className="check-out">
            <label>CHECK-OUT</label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
            />
            {errors.checkOut && <p className="error-message">{errors.checkOut}</p>}
          </div>
          <div className="rooms">
            <label>ROOMS</label>
            <div className="room-counter">
              <button onClick={() => handleRoomChange("decrement")}>-</button>
              <span>{formData.rooms}</span>
              <button onClick={() => handleRoomChange("increment")}>+</button>
            </div>
          </div>
          <div className="payment">
            <span className="price">₹{totalPrice.toLocaleString()}</span>
            <button className="pay-button" onClick={handleSubmit} title="Click to pay token amount">
              →
            </button>
          </div>
        </div>
      </div>
      <div>
      <section id="about">
  <footer className="footer">
    <div className="footer-container">
      {/* Left side: Contact information */}
      <div className="foot">
        <h3>Brisphere</h3>
        <p className="para">Spituk, Ladakh,</p>
        <p className="para">India, 194101</p>
        <p className="para">+91 - 7764997033</p>
        <p className="para">amit.jha6700@gmail.com</p>
        <button className="location-button">Location</button>
      </div>

      {/* Right side: Terms and Policies headings */}
      <div className="footer-headings">
        <h3>Terms and Conditions</h3>
        <h3>Privacy Policy</h3>
        <h3>Refunds</h3>
      </div>
    </div>
  </footer>
</section>

      </div>
    </div>
  );
};

export default BookingDetails;
