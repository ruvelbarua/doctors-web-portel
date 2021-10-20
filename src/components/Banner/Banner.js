import React from 'react';
import Bgimg from '../../logo/hospital.jpg';
import { Card, Nav, Button, Navbar } from 'react-bootstrap';
import './Banner.css';
import { Link } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
    const { user, logOut } = useAuth()
    return (
        <div responsive="xl">
            <Card>
                <Card.Img src={Bgimg} alt="Card image" />
                <Card.ImgOverlay>
                    <div className="d-flex justify-content-center font">
                        <Nav.Item>
                            <Nav.Link as={HashLink} to="/home"> <span className="text-success">Home</span> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={HashLink} to="/doctors"><span className="text-success">Doctor</span> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={HashLink} to="/nurses"><span className="text-success">Nurse</span>  </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={HashLink} to="/service"><span className="text-success">Service</span> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={HashLink} to="/register"><span className="text-primary">Register</span> </Nav.Link>
                        </Nav.Item>
                        {user?.email ?
                            <Button onClick={logOut} variant="danger">Logout</Button> :
                            <Nav.Link as={Link} to="/login"><span className="text-danger">Login</span> </Nav.Link>}

                        <Navbar.Text>
                            <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
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