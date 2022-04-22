import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import "./Services.css";


const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2 className="services-title">Unique Summer Program</h2>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;