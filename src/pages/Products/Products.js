import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Categories/BookingModal/BookingModal';
import Product from './Product';

const Products = () => {
    const products = useLoaderData();
    const [product, setProduct] = useState(null)
    return (
        <div>
            <h2 className='font-bold lg:text-2xl mt-3 text-center'>Total {products.length} Products</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                    products.map(item => <Product
                        key={item.id}
                        setProduct={setProduct}
                        item={item}
                    ></Product>
                    )
                }
            </div>
            {
                product &&
                <BookingModal
                    product={product}
                ></BookingModal>
            }
        </div>
    );
};

export default Products;