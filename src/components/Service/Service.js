import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css";

const Service = ({ service }) => {
    const { name, img, price, ratings, details } = service;
    return (
        <div className="service-container">
            <img height="300px" width="300px" src={img} alt="" />
            <h2>{name}</h2>
            <h5>Price:${price}</h5>
            <p>{details}</p>
            <Link to="/checkout">
                <button className="btn header-button">Book Now</button>
            </Link>
        </div>
    );
};

export default Service;