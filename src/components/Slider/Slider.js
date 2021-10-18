import React from 'react';
import './Slider.css';
import { Carousel } from 'react-bootstrap';
import Simg1 from '../../logo/doctorslide/doctor1.jpg';
import Simg2 from '../../logo/doctorslide/doctor2.jpg';
import Simg3 from '../../logo/doctorslide/doctor3.jpg';


const Slider = () => {
    return (
        <div className="container">
            <div className="text-primary">
                <h2>Doctors Services</h2>
            </div>
            <div className="carousel">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Simg1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className="text-primary">
                                <h3>Health Cheackup</h3>
                                <p>The doctor always checkup for patient health improvement.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Simg2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <div className="text-warning">
                                <h3>Health Care</h3>
                                <p>The doctor always checkup for patient health improvement.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Simg3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <div className="text-danger">
                                <h3>Patient Care</h3>
                                <p>The doctor always checkup for patient health improvement.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;