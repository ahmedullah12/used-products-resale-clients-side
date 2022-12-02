import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-40'>
            <h2 className='text-5xl text-secondary'>Oops!!!!!</h2>
            <p className='my-10'>The page you are trying to get is not found</p>
            <Link to='/'><button className='btn btn-primary'>Go Back to Home Page</button></Link>
        </div>
    );
};

export default ErrorPage;