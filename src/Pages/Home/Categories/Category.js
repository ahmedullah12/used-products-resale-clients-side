import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {categoryName, image} = category;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className='mt-4'><img className='w-80 h-52 rounded' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{categoryName}</h2>
                
                <div className="card-actions justify-end">
                    <Link to={`/products/${categoryName}`}><button className="btn btn-primary">See The Products</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Category;