import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
    return (
        <div className="container w-50 p-5 my-5 bg-primary">
            <div className="bg-primary text-light text-center">
                <h2>Registration Form</h2>
            </div>
            <Form>
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
                <Button variant="danger" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;