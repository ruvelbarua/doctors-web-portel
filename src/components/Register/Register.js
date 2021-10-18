import React from 'react';
import useAuth from '../Hook/useAuth';

const Register = () => {
    const user = useAuth();
    return (
        <div>
            <h2>This is Register {user}</h2>
        </div>
    );
};

export default Register;