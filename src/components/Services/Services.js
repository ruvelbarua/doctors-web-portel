import React, { useEffect, useState } from 'react';
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
            <div className="stitle">
                <h2>Hospital Services</h2>
            </div>
            <div className="container">
                <div className="row">
                    {
                        services.map(service =>
                            <div className="col-md-3" key={service.id}>
                                <div className="scart">
                                    <div className="my-3">
                                        <div className=" justify-align-center">
                                            <img src={service.img} alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4>{service.sname}</h4>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;