import React from 'react';
import { Card } from 'react-bootstrap';
import Bnimage from '../../logo/db.jpg';


const Signout = () => {
    return (
        <div className="text-center text-primary p-2">
            <h2>Congratulations. </h2>
            <p>You are Successful Signin Our Page.</p>
            <div className="w-100 justify-content-center">
                <Card className="justify-content-center">
                    <Card.Img variant="top" src={Bnimage} />
                    <Card.Body className="text-dark">
                        <Card.Text>
                            Now you are visit our all pages and get more informations.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
            </div>
        </div>
    );
};

export default Signout;