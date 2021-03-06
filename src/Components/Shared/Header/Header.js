import React from 'react';
import logo from '../../../Assets/Images/logo.png'
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <div className='relative flex justify-center'>
            <img src={logo} alt="{logo}" />
            </div>
            <div>
                <Navbar></Navbar>
            </div>
            
        </div>
    );
};

export default Header;