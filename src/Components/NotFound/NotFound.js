import React from 'react';
import camera from '../../Assets/Images/christian-bolt-_IR0185tRzA-unsplash.jpg'

const NotFound = () => {
    return (
        <div className='mx-auto'>
            <h1 className='text-center text-8xl'>404</h1>
            
            <div className='container w-50 flex justify-center align-middle object-fit'>
            <img className='w-25' src={camera}  alt="" />
            </div>
            <h1 className='text-center text-8xl'>404</h1>
        </div>
    );
};

export default NotFound;