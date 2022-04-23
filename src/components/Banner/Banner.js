import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../images/banner/banner1.jpg";
import banner2 from "../../images/banner/banner-2.jpg";

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="container">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height="550px"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Conceptualizing Courses Easy Way</h3>
                    <p>My Mission is to inspire a learning with a focus on a scholarship.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    height="450px"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Private SAT Tutoring </h3>
                    <p>High is nationally recognized independent school.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};

export default Banner;