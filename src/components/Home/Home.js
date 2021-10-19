import React from 'react';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Nurses from '../Nurses/Nurses';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Services></Services>
            <Slider></Slider>
            <Doctors></Doctors>
            <Nurses></Nurses>
        </div>
    );
};

export default Home;