// src/components/Services.js
import React from 'react';
import { FaWifi, FaUtensils, FaHome, FaCar, FaPizzaSlice, FaMountain, FaBriefcase, FaKey, FaShoppingCart } from "react-icons/fa";
import './index.css'
function Services() {
  return (
    <section id="services" className="services-section">
  <h2 className='head'>Services</h2>
  <div className="services-grid">
    {[
      { title: "High Speed Internet",
         description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
          icon: <FaWifi /> },

      { title: "Healthy Meals",
         description: "A healthy breakfast and pleasant dinner will be serviced at your space every single day for your entire duration of stay with option of paid order within BriSphere.",
          icon: <FaUtensils /> },

      { title: "Homely Stay",
         description: "Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts providedin your space.",
          icon: <FaHome /> },
      { title: "Transportation", 
        description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
         icon: <FaCar /> },
      { title: "Food Delivery",
        description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
          icon: <FaPizzaSlice /> },
      { title: "Tourism",
         description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.", 
         icon: <FaMountain /> },
      { title: "Job",
         description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
          icon: <FaBriefcase /> },

      { title: "Rental Service",
         description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
          icon: <FaKey /> },

      { title: "Online Shop",
         description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
          icon: <FaShoppingCart /> },
    ].map((service, index) => (
      <div key={index} className="service-item">
        <i className="service-icon">{service.icon}</i>
        <h4>{service.title}</h4>
        <p>{service.description}</p>
      </div>
    ))}
  </div>
</section>

  );
}

export default Services;
