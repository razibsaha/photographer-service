import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams([]);
    return (
        <div>
            <div className='container my-12 mx-auto flex justify-center align-middle'>
            <h1>Service details</h1>
            </div>
            <div className='container flex justify-center align-middle bg-[#D5B69C] py-12 rounded-lg w-10 '>
            <h1 className='text-white text-8xl'>{serviceId}</h1>
            </div>
            <br />
            <div className='text-center'>
            <Link to='/checkout'>
                <button className="bg-[#4b4948] p-3 rounded-md text-white hover:bg-[#262626]">Proceed checkout</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;