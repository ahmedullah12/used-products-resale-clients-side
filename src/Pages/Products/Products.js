import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <div>
           {products.length} 
        </div>
    );
};

export default Products;