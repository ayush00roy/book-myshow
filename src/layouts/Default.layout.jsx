import React from 'react'


//componets
import Navbar from '../components/Navbar/navbar.component';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.component';
const DefaultLayout = (props) => {
    return (
        <>
            <Navbar />
            <HeroCarousel/>
            {props.children}
        </>
    );
};

export default DefaultLayout;
