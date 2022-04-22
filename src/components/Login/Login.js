import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    }

    const navigateRegister = event => {
        navigate("/register")

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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className="btn header-button" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New to TS Tutor Center? <span className="text-danger" onClick={navigateRegister}>Please Register</span></p>
        </div>
    );
};

export default Login;