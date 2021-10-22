import React, { useEffect, useState } from 'react';
import './Doctors.css';
import { Container, Button, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllDoctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('/doctorsData.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="">
            <div className="consultent text-danger">
                <h2 className="text-center">DOCTORS INFORMATION</h2>
            </div>
            <div className="container">
                <div className="row">
                    {
                        doctors.map(doctor =>
                            <div className="col-lg-4 col-md-6" key={doctor.id}>
                                <div className="dcart">
                                    <h5>{doctor.name}</h5>
                                    <Container className="">
                                        <Row>
                                            <Col xs={6} md={4}>
                                                <Image src={doctor.img} roundedCircle />
                                            </Col>

                                        </Row>
                                    </Container>
                                    <div className="my-3">
                                        <Link to="/doctorinfo">
                                            <Button variant="outline-danger">Details</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div >
        </div>
    );
};

export default AllDoctors;