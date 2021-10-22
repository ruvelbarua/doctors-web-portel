import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="service-cart">
                <h2 className="text-center">OUR SERVICES</h2>
            </div>

            <div className="container-fluid">

                <div className="row">
                    {
                        services.map(service =>
                            <div className="col-md-3" key={service.id}>
                                <div className="scart">
                                    <div className="my-3 justify-align-center">
                                        <Container>
                                            <Row>

                                                <Col xs={6} md={3}>
                                                    <Image src={service.img} roundedCircle />
                                                </Col>

                                            </Row>
                                        </Container>
                                    </div>
                                    <div className="">
                                        <h4>{service.sname}</h4>
                                    </div>
                                    <Link to="/service">
                                        <Button variant="outline-primary">Visit More</Button>
                                    </Link>
                                </div>

                            </div>
                        )
                    }
                </div>

            </div >
        </div>
    );
}
export default Services;