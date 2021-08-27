import React from 'react';

//componets
import Navbar from '../components/Navbar/navbar.component';

const MovieLayout = (props) => {
    return (
        <>
            <Navbar/>
            {props.children}
        </>
    );
};

export default MovieLayout;
