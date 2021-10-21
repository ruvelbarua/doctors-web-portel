import React from 'react';
import { Form, Button } from 'react-bootstrap';
import initializeAuthentication from '../Firebase/Firebase.init';
import useAuth from '../Hook/useAuth';
import './Login.css';

initializeAuthentication();

const Login = () => {
    const { signInUsinGoogle, user } = useAuth();

    return (
        <div className="container w-50 p-5 my-5 bgcolor">
            <div className="bg-danger text-light text-center p-2">
                <h2>Please Login Your Account</h2>
            </div>
            <Form className="p-5">
                <Form.Group className="mb-3 text-dark" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button onClick={signInUsinGoogle} variant="primary" size="lg" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};
export default Login;