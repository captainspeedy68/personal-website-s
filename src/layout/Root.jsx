import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Nav from '../shared/Nav';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;