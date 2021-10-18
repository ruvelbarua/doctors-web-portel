import React from 'react';
import Error from '../../logo/404.jpg'

const Notfound = () => {
    return (
        <div className="text-center my-3">
            <div className="erimg">
                <img src={Error} alt="" />
            </div>
        </div>
    );
};

export default Notfound;