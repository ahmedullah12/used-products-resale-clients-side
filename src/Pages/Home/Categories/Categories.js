import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://assignment-12-server-steel-delta.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className='my-10 mx-32'>
            <h3 className='mb-10 text-2xl text-center'>These are the Categories. You can view the products from each category</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                categories.map(category => <Category key={category._id} category={category}></Category>)
            }
            </div>
        </div>
    );
};

export default Categories;