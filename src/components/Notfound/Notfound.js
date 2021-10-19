import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Error from '../../logo/404.jpg'

const Notfound = () => {
    return (
        <div className="text-center my-5">
            <div className="">
                <img style={{ width: '50%' }} src={Error} alt="" />
            </div>
            <br />
            <Link to="/home">
                <Button variant="outline-primary">Go Home</Button>
            </Link>

        </div>
    );
};

export default Notfound;