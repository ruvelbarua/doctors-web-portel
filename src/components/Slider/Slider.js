import React from 'react';
import './Slider.css';
import { Carousel } from 'react-bootstrap';
import Simg1 from '../../logo/doctorslide/doctor1.jpg';
import Simg2 from '../../logo/doctorslide/doctor2.jpg';
import Simg3 from '../../logo/doctorslide/doctor3.jpg';
import Simg4 from '../../logo/doctorslide/doctor4.jpg';
import Simg5 from '../../logo/doctorslide/doctor5.jpg';
import Simg6 from '../../logo/doctorslide/doctor6.jpg';
import Simg7 from '../../logo/doctorslide/doctor7.jpg';
import Simg8 from '../../logo/doctorslide/doctor8.jpg';
import Simg9 from '../../logo/doctorslide/doctor9.jpg';
import Simg10 from '../../logo/doctorslide/doctor10.jpg';
import Simg11 from '../../logo/doctorslide/doctor11.jpg';


const Slider = () => {
    return (
        <div className="">
            <div className="container-fluid">
                <div className="text-light text-center bg-primary">
                    <h2>HEALTH CARE</h2>
                </div>
                <div className="carousel justify-content-center">
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100 h-40" src={Simg1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <div className="text-primary">
                                    <h3>Health Cheackup</h3>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-40"
                                src={Simg2}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <div className="text-warning">
                                    <h3>Health Care</h3>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-40"
                                src={Simg3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <div className="text-danger">
                                    <h3>Patient Care</h3>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-40"
                                src={Simg4}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <div className="text-danger">
                                    <h3>Patient Care</h3>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-40"
                                src={Simg5}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <div className="text-danger">
                                    <h3>Patient Care</h3>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-40"
                                src={Simg6}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <div className="text-danger">
                                    <h3>Patient Care</h3>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-40"
                                src={Simg7}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <div className="text-danger">
                                    <h3>Patient Care</h3>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-40"
                                src={Simg8}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <div className="text-danger">
                                    <h3>Patient Care</h3>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-40"
                                src={Simg9}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <div className="text-warning">
                                    <h3>Doctors Team</h3>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Simg10}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <div className="text-danger">
                                    <h3>Digital Lab</h3>
                                    <p>The doctor checkup digital lab.</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-40"
                                src={Simg11}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <div className="text-danger">
                                    <h3>Extra Care</h3>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Slider;