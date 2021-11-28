import React from 'react';
import dimg from '../../logo/dn.jpg';
import dimg2 from '../../logo/heart.jpg';
import dimg3 from '../../logo/logo1.jpg';


const Doctorinfo = () => {
    return (
        <div className="m-5">
            <div className="row">
                <div className="text-center text-success">
                    <h2>DOCTORS INFORMATION</h2>
                </div>
                <div className="container-fluid d-flex my-2 p-2">
                    <div className="col-md-2 bg-light ml-2 border">
                        <div className="my-3 text-success text-center">
                            <h3 >Department</h3>
                        </div>
                        <div className="">
                            <h5><u>Contact:</u></h5>
                            <small>Call: 096-425687</small> <br />
                            <small>Whatapp: 096-425688</small> <br />
                            <small>Email: drhelpinfo@gmail.com</small>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="bg-light border text-danger text-center">
                            <div className="container-fluid d-flex">
                                <div className="row">
                                    <div className="col-md-4 border">
                                        <div>
                                            <img className="my-2" src={dimg} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 border">
                                        <div>
                                            <img className="my-2" src={dimg2} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 border">
                                        <div>
                                            <img className="my-2" src={dimg3} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Sorry, We are working some design and development part. Display all information very soon. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctorinfo;