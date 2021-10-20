import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
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

            <div className="container">

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
                                    <div className="p-3">
                                        <Button variant="secondary" size="sm">
                                            Details
                                        </Button>
                                    </div>
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