import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaStar, FaEye } from "react-icons/fa";
import useTitle from '../../hooks/title/UseTitle';
import Loading from '../Loading/Loading';
const Product = ({ item, setProduct }) => {
    useTitle('All Products')
    const { isLoading } = useQuery;
    const { title, total_view, rating, image_url, name, location, year_of_used, resale_price, original_price, time } = item;
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="card card-compact m-12 bg-base-100 shadow-xl bg-#f5dfdf-200">
            <figure><img className='m-2' src={image_url} alt="" /></figure>
            <h2 className='text-xl font-bold p-4'>{title}</h2>
            <div className="card-body text-start">
                <div className='flex mt-6 justify-between'>
                    <div className='flex'>
                        <FaStar className='text-yellow-400 -mt-7 mr-4' />
                        <p className='-mt-8'>{rating}</p>
                    </div>

                    <div className='flex '> <FaEye className='-mt-7 mr-4' />
                        <p className='-mt-8'>{total_view}</p>
                    </div>
                </div>

                <div className='grid grid-cols-2 -mt-4'>

                    <p className='py-2'><strong>Name: {name}</strong> </p>
                    <p className='py-2 ml-4'><strong>Location:</strong> {location}</p>
                    <p><small>Original Price: <strong>$ {original_price}</strong></small></p>
                    <p className='ml-4'><small>Resale Price: <strong>$ {resale_price}</strong></small></p>
                    <p><small>Uploaded Time: {time} A.M</small></p>
                    <p className='ml-4'><small>Used {year_of_used} years</small> </p>

                </div>
                <div className='card-actions justify-center mt-6'>
                    <label
                        htmlFor="booking-modal" className="btn btn-secondary text-white px-12"
                        onClick={() => setProduct(item)}
                    >Buy Now</label>
                </div>
            </div >
        </div >
    );
};

export default Product;