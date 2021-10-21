import React, { useEffect, useState } from 'react';
import { Image, Button } from 'react-bootstrap';
import './Service.css';

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="servicename">
                <h2 className="text-center">OUR SERVICE DETAILS</h2>
            </div>

            <div className="container-fluid d-flex jusgify-content-center">
                <div className="row">
                    {
                        services.map(service =>
                            <div className="col-md-4" key={service.id}>
                                <div className="d-flex  p-3 cart card-img" >
                                    <div className="my-3 justify-align-center">
                                        <h4>{service.sname}</h4>
                                        <Image className="img" src={service.img} />
                                        <h4 className="my-2">Code:   {service.id}</h4>
                                    </div>
                                    <div className="my-5 p-2 text-dark ">
                                        <td className="mx-2 cost">
                                            <tr>Cost: {service.m_price}</tr>
                                            <tr>Total Tax: {service.tax}</tr>
                                            <tr>Charge: {service.s_charge}</tr>
                                            <tr>Total: {service.total}</tr>
                                        </td>
                                        <div className="p-3">
                                            <Button onClick={Service} variant="danger" size="sm">
                                                Submit
                                            </Button>
                                        </div>
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
export default Service;