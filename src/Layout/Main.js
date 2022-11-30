import React from 'react';
import { Outlet } from 'react-router-dom';
import useTitle from '../hooks/title/UseTitle';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';

const Main = () => {
    useTitle('Home')
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;