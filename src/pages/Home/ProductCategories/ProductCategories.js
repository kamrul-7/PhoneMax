import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='lg:pb-4 lg:pr-4 pb-2 pl-2 my-12'>
            <div className='lg:ml-12 lg:p-8'>
                <h1 className='lg:font-bold mt-3 font-semibold text-center lg:text-3xl mb-6'>Second Hand Products Categories</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-12'>
                {
                    categories.map(category => <div key={category.id} className="card bg-base-100">
                        <figure className="">
                            <img src={category.img} alt="Phones" className="rounded-xl" />
                        </figure>
                        <Link to={`/category/${category.id}`} className='text-center text-xl font-bold'>{category.name}</Link>
                    </div>)
                }
            </div>
        </div >
    );
};

export default ProductCategories;