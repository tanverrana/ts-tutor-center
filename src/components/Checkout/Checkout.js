import React from 'react';

const Checkout = () => {
    return (
        <div className="register-form">
            <h2 className="text-center services-title my-4">Proceed Checkout!</h2>
            <form>

                <input type="text" name="name" id="" placeholder="Enter Your Name" />
                <input type="email" name="email" id="" placeholder="Enter Your Email" required /><br />
                <input type="text" name="" id="" placeholder="Enter Your Address" />
                <input type="text" name="" id="" placeholder="Enter Your City" />
                <input type="text" name="" id="" placeholder="Enter Your Phone Number" />

                <input className="btn header-button w-50 mx-auto" type="submit" value="Submit" />
            </form>


        </div>
    );
};

export default Checkout;