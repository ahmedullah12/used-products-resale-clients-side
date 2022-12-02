import React from 'react';
import { Link } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';

const Product = ({product}) => {
    const {_id, productName, originalPrice, resalePrice, description, image, years_of_use, post_date, location, sellerName} = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className='mt-4'><img className='w-80 h-52 rounded' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>{description}</p>
                <p><span className='font-bold'>Location:</span> {location}</p>
                <p><span className='font-bold'>Original Price:</span> {originalPrice}</p>
                <p><span className='font-bold'>Resale Price:</span> {resalePrice}</p>
                <p><span className='font-bold'>Years of Use:</span> {years_of_use}</p>
                <p><span className='font-bold'>Post Date:</span> {post_date}</p>
                <p><span className='font-bold'>Seller Name:</span> {sellerName}</p>
                <label htmlFor={`"my-modal-${_id}"`} className="btn">open modal</label>
            </div>
            <BookingModal product={product}></BookingModal>
        </div>
    );
};

export default Product;