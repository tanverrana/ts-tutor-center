import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import "./Register.css";

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate("/login");
    }

    if (user) {
        navigate("/home");
    }
    if (loading) {
        return <Loading></Loading>;
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className="register-form">
            <h2 className="text-center my-4">Please Register!</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder="Enter Your Name" />
                <input type="email" name="email" id="" placeholder="Enter Your Email" required /><br />
                <input type="password" name="password" id="" placeholder="Enter Your Password" required />
                <input className="btn header-button w-50 mx-auto" type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link className="text-danger text-decoration-none" to="/login" onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;