import React, { useEffect, useState } from 'react';

const ServiceCharge = () => {
    const [servicecharge, setServiceCharge] = useState([])
    useEffect(() => {
        fetch('/serviceChargeData.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h2>This is service charge page</h2>
        </div>
    );
};

export default ServiceCharge;