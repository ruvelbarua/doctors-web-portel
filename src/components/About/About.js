import React from 'react';
import Images from '../../logo/medicalboard.jpg';
import Image from '../../logo/extracare.png';
import './About.css'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="container-fluid d-flex">
            <div className="">
                <div className="my-5 text-center text-danger">
                    <h2>ABOUT US</h2>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-md-8 my-2">
                            <div className="my-2">
                                <img className="image" src={Images} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h2>Description:</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum possimus unde aspernatur labore porro ad magnam corrupti vitae, numquam modi odit perferendis similique qui esse adipisci voluptatum hic eum! Quibusdam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum possimus unde aspernatur labore porro ad magnam corrupti vitae, numquam modi odit perferendis similique qui esse adipisci voluptatum hic eum! Quibusdam.</p>
                            <div>
                                <img src={Image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;