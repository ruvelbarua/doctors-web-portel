import React from 'react';
import Images from '../../logo/medicalboard.jpg';
import Image from '../../logo/heart.jpg';
import './About.css'
import { FcCustomerSupport, FcDepartment, FcGoogle } from 'react-icons/fc';

const About = () => {
    return (
        <div className="container-fluid d-flex">
            <div className="">
                <div className="my-3 text-center text-danger">
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
                            <div className="text-dark my-3">
                                <h4>Contact:</h4>
                                <p className="ftext"><FcDepartment />: www.trbdh.com</p>
                                <p className="ftext"><FcGoogle />: trbdhospital@gmail.com</p>
                                <p className="ftext"> <FcCustomerSupport /><span>:+0088-(101)-888001-5</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;