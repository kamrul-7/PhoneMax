import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const products = useLoaderData();
    return (
        <div>
            <h2 className='font-bold lg:text-2xl mt-3 text-center'>Total {products.length} Products</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                    products.map(item => <Product
                        item={item}
                    ></Product>
                    )
                }
            </div>
        </div>
    );
};

export default Products;