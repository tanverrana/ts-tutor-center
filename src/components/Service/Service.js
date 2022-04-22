import React from 'react';
import "./Service.css";

const Service = ({ service }) => {
    const { name, img, price, ratings, details } = service;
    return (
        <div className="service-container">
            <img height="300px" width="300px" src={img} alt="" />
            <h2>{name}</h2>
            <h5>Price:${price}</h5>
            <p>{details}</p>
            <button className="btn header-button">Book Now</button>
        </div>
    );
};

export default Service;