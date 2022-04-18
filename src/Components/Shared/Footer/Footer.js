import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='container mx-auto text-center py-20'>
            <small>Copyright © {year} <strong>RAZIB SAHA</strong></small>
        </div>
    );
};

export default Footer;