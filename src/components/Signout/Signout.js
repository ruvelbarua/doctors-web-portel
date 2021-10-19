import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Home from '../Home/Home';
import Bnimage from '../../logo/bnr.jpg';

const Signout = () => {
    return (
        <div className="text-center text-primary p-5">
            <h2>Welcome. </h2>
            <p>You are Successful Signin Our Page.</p>
            <div className="w-50 justify-content-center">
                <Card className="justify-content-center">
                    <Card.Img variant="top" src={Bnimage} />
                    <Card.Body className="text-danger">
                        <Card.Text>
                            Now you are visit our all pages and get more informations.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Button onClick={Home} variant="primary">Go Home</Button>
            </div>
        </div>
    );
};

export default Signout;