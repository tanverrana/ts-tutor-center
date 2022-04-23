import React from 'react';
import picture from "../../images/tanver.png"

const About = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div>
                <img src={picture} alt="" />
                <h3>Md. Tanver Rana Sobur</h3>
            </div>
            <div className="mx-5">

                <p>Hello!! I am Tanver Sobur. At present I am a student of Programming Hero.And I am Studying at Bangladesh University department of CSE.I want to build myself as a frontend developer. That is why i am working hard. But now my main target jis to get a chance in SCIC. So That I can get an idea about web Development job market and build myself in a better way.And If I get an offer from a good company I want to work with them. <br /> Thanks:) <br />Tanver Sobur</p>
            </div>
        </div>
    );
};

export default About;