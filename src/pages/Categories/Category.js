import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductSummeryCard from '../ProductSummeryCard/ProductSummeryCard';
const Category = () => {
    const categoryProduct = useLoaderData();

    return (
        <div>
            <h2 className='font-bold lg:text-2xl mt-3 text-center'>This Category has {categoryProduct.length} Products</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 m-8 lg:m-10'>
                {
                    categoryProduct.map(product =>
                        <ProductSummeryCard
                            key={product.key}
                            product={product}
                        ></ProductSummeryCard>
                    )
                }
            </div>
        </div>
    );
};

export default Category;