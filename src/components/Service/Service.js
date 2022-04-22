import React from 'react';

const Service = ({ service }) => {
    const { name, img, price, ratings, details } = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h5>Price:{price}</h5>
            <p>{details}</p>
        </div>
    );
};

export default Service;