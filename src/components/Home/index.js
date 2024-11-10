// src/components/Home.js
import React from 'react';
import Header from '../Header';
import Booking from '../Booking';
import Discover from '../Discover';
import Services from '../Services';
import Footer from '../Footer';

function Home() {
  return (
    <div>
      <Header />
      <Booking />
      <Discover />
      <Services />
      <Footer />
    </div>
  );
}

export default Home;
