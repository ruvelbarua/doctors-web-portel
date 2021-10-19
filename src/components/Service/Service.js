import React, { useEffect, useState } from 'react';

const Allservice = () => {
    const [service, setService] = useState({})
    useEffect(() => {
        fetch('/serviceData.json')
            .then(res => res?.json())
            .then(data => setService(data))
    }, [])
    console.log(service)
    return (
        <div>
            <h2>This is service {service.length}</h2>
        </div>
    );
};

export default Allservice;