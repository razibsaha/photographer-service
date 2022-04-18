import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams([]);
    return (
        <div>
            <div className='container my-12 mx-auto flex justify-center align-middle'>
            <h1>Service details</h1>
            </div>
            <div className='container flex justify-center align-middle bg-blue-900 py-12 text-white w-20 '>
            <h1>{serviceId}</h1>
            </div>
            <br />
            <div className='text-center'>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Proceed checkout</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;