import React from 'react';
import Bgimg from '../../logo/hospital.jpg';
import { Card, Nav, Button, Navbar, Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="m-auto">
            <Card>
                <Card.Img src={Bgimg} alt="Card image" />
                <Card.ImgOverlay>
                    <div className="d-flex justify-content-center font ">
                        <Nav.Item>
                            <Nav.Link href="#first">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">Doctor </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">Nurse </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">Our Services</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">Login</Nav.Link>
                        </Nav.Item>
                    </div>
                    <div className="text-center ">
                        <h2 className="hospital-text">The Royal BD Hospital</h2>
                        <p className="htext">Excelent Health Care</p>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Banner;