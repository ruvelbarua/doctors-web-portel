import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Bnimage from '../../logo/bnr.jpg';
import { Link } from 'react-router-dom';

const Signout = () => {
    return (
        <div className="text-center text-primary p-5">
            <h2>Congratulations. </h2>
            <p>You are Successful Signin Our Page.</p>
            <div className="w-100 justify-content-center">
                <Card className="justify-content-center">
                    <Card.Img variant="top" src={Bnimage} />
                    <Card.Body className="text-danger">
                        <Card.Text>
                            Now you are visit our all pages and get more informations.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Link to="/home">
                    <Button variant="outline-primary">Go Home</Button>
                </Link>
            </div>
        </div>
    );
};

export default Signout;