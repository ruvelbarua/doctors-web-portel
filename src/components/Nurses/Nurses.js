import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Nurses.css';

const Nurses = () => {
    const [nurses, setNurses] = useState([]);
    useEffect(() => {
        fetch('/nurseData.json')
            .then(res => res.json())
            .then(data => setNurses(data));
    }, [])

    return (
        <div>
            <div className="nurse-cart">
                <h2 className="text-center">NURSES INFORMATION</h2>
            </div>

            <div className="container">

                <div className="row">
                    {
                        nurses.map(nurse =>
                            <div className="col-md-3" key={nurse.id}>
                                <div className="ncart">
                                    <div className="my-3 justify-align-center">
                                        <Container>
                                            <Row>

                                                <Col xs={6} md={3}>
                                                    <Image src={nurse.img} roundedCircle />
                                                </Col>

                                            </Row>
                                        </Container>
                                    </div>
                                    <div>
                                        <h4>{nurse.name}</h4>
                                    </div>
                                    <div className="my-3">
                                        <Link to="/nurseinfo">
                                            <Button variant="outline-primary">More</Button>
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
}

export default Nurses;