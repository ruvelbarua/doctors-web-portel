import React from 'react';
import './Footer.css';
import Fimg from '../../logo/fimg.jpg';
import Logo from '../../logo/logo1.jpg';
import { Card } from 'react-bootstrap';
import { FcDepartment, FcCustomerSupport, FcGoogle } from "react-icons/fc";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="d-fex">
            <Card>
                <Card.Img src={Fimg} alt="Card image" />
                <Card.ImgOverlay>
                    <div className="row mt-4">
                        <div className="col-md-2">
                            <div className="text-white">
                                <h4>Contact:</h4>
                                <p className="ftext"><FcDepartment />: www.trbdh.com</p>
                                <p className="ftext"><FcGoogle />: trbdhospital@gmail.com</p>
                                <p className="ftext"> <FcCustomerSupport /><span>:+0088-(101)-888001-5</span></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center">
                                <h2 className="hospital-text">The Royal BD Hospital</h2>
                                <p className="health">Excelent Health Care</p>
                                <div className="logo">
                                    <img src={Logo} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="text-normal ftext">
                                <h4>Media:</h4>
                                <p><FaFacebookSquare />: Facebook</p>
                                <p><FaTwitterSquare />: Twiter</p>
                                <p><FaInstagramSquare />: Instagram</p>
                                <p><FaYoutube />: Youtube</p>
                            </div>
                        </div>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </div >
    );
};

export default Footer;