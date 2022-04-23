import React from 'react';
import { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let errorElement;
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth
    );
    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <div>
            <p className="text-danger">Error: {error.message}</p>
        </div>

    }
    if (loading) {
        return <Spinner className="align-item-center" animation="border" variant="info" />;
    }

    const handleSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate("/register")

    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    return (
        <div className="container mx-auto w-50">
            <h2 className="text-center mt-2">Please Login!</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className="btn header-button w-50 mx-auto d-block" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to TS Tutor Center? <Link className="text-danger text-decoration-none" to="/register" onClick={navigateRegister}>Please Register</Link></p>
            <p>Forget Password? <Link className="text-danger text-decoration-none" to="/register" onClick={resetPassword}>Reset Password.</Link></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;