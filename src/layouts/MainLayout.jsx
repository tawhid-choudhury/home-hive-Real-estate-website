// import React from 'react';
import Navbar from '../components/shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            {/* <div className=''> */}
            <div className='min-h-screen'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;