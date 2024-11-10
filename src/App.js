// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import BookingDetails from './components/BookingDetails';
import OrderComplete from './components/OrderComplete';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route that redirects to /home */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Home route that displays all components */}
        <Route path="/home" element={<Home />} />

        {/* Other routes, like the BookingDetails page */}
        <Route path="/booking-details" element={<BookingDetails />} />
        <Route path="/order-complete" element={<OrderComplete />} />
      </Routes>
    </Router>
  );
}

export default App;
