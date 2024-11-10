// src/components/Header.js
import React from 'react';
import './index.css';

function Header({ onClick }) {
  return (
    <header className="header" onClick={onClick}>
      <h1 className="logo">Brisphere</h1>
      <nav className="nav-links">
        <a href="#discover" className="nav-link">Discover</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#about" className="nav-link">About Us</a>
      </nav>
    </header>
  );
}

export default Header;
