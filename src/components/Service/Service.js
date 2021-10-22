import React, { useEffect, useState } from 'react';
import { Image, Button } from 'react-bootstrap';
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
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
                <h2 className="text-center">OUR 24/7 HOURS SERVICES</h2>
            </div>

            <div className="container-fluid d-flex jusgify-content-center">
                <div className="row">
                    {
                        services.map(service =>
                            <div className="col-md-4" key={service.id}>
                                <div className="d-flex  p-2 cart img my-3" >
                                    <div className=" justify-align-center">
                                        <h4>{service.sname}</h4>
                                        <Image className="img" src={service.img} />
                                        <h4 className="my-2">Code:   {service.id}</h4>
                                    </div>
                                    <div className="my-5 p-2 text-dark ">
                                        <h4 className="text-primary">Daily Cost :</h4>
                                        <td className="mx-2 cost">
                                            <tr>Cost: {service.m_price}</tr>
                                            <tr>Total Tax: {service.tax}</tr>
                                            <tr>Charge: {service.s_charge}</tr>
                                            <tr>Total: {service.total}<HiOutlineCurrencyBangladeshi /></tr>

                                        </td>
                                        <div className="p-2">
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