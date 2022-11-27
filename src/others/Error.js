import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div>
            <h3 className='text-6xl mt-6 font-bold text-center'>Error!</h3>
            <img className='rounded mx-auto d-block' src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=996&t=st=1665506191~exp=1665506791~hmac=bf947349dfc3670202769201764e6e6862645018ff6298042084128127c146cb" alt="" />
            <h5 className='text-3xl text-center'>This page is Not Found</h5>
            <div className='my-12'>
                <Link
                    to='/'
                    className='px-8 py-3 my-16 font-semibold rounded bg-cyan-200 text-gray-900 align-middle content-center '
                >
                    Back to homepage
                </Link>
            </div>
        </div>
    );
};

export default Error;