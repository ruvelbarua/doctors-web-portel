import React from 'react';
import Bgimg from '../../logo/hospital.jpg';
import { Card, Nav, Button, Navbar, Container } from 'react-bootstrap';
import './Banner.css';
import useFirebase from '../Hook/useFirebase';
import { Link } from 'react-router-dom';

const Banner = () => {
    const { handleLogout, user } = useFirebase()
    return (
        <div className="m-auto">
            <Card>
                <Card.Img src={Bgimg} alt="Card image" />
                <Card.ImgOverlay>
                    <div className="d-flex justify-content-center font ">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/home#home"> <span className="text-success">Home</span> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/doctors"><span className="text-success">Doctor</span> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/services"><span className="text-success">Sevices</span> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/nurses"><span className="text-success">Nurse</span>  </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/servicecharge"><span className="text-success">Service Charge</span> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/register"><span className="text-primary">Register</span> </Nav.Link>
                        </Nav.Item>
                        {user?.email ? (<Nav.Item>
                            <Nav.Link onClick={handleLogout} as={Link} to="/login"><span className="text-danger">Login</span> </Nav.Link>
                        </Nav.Item>) : (
                            <Nav.Item>
                                <Nav.Link as={Link} to="/signout"><span className="text-danger">Logout</span> </Nav.Link>
                            </Nav.Item>)}
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