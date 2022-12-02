import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const {brand} = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            const remaining = data.filter(prod => prod.brand === brand);
            setProducts(remaining)
        })
    },[brand])
    return (
        <div className='mx-32'>
           <h2 className='text-2xl text-center'>These are the Products</h2> 
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           {
            products.map(product => <Product key={product._id} product={product}></Product>)
           }
          </div>
        </div>
    );
};

export default Products;