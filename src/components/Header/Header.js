import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import useFirebase from '../Hook/useFirebase';


const Header = () => {
    const { handleLogout, user } = useFirebase();
    return (
        <div>
            <Banner></Banner>
            <Link to="/services" className="header-items">Services</Link>
            <Link to="/doctors" className="header-items">Doctors</Link>
            <Link to="/nurses" className="header-items">Nurces</Link>
            <Link to="/register" className="header-items">Register</Link>
            {user?.email ? (
                <li onClick={handleLogout} className="header-items">Logout</li>
            ) : (
                <Link to="/login" className="header-items">Login</Link>)
            }
        </div>

    );
};

export default Header;