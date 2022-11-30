import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const AdvertisedItem = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    let count = 0;
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600 my-12">Advertised Area</p>

            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products?.map((phone) => {
                        count = count + 1;
                        if (count <= 3) {
                            return (<div>
                                <div className="card card-compact p-12 w-96 bg-base-100 shadow-xl mb-10">
                                    <img src={phone.image_url} alt="" />
                                    <h2 className="card-title my-6">{phone.title}</h2>
                                    <div className="card-body grid grid-cols-2">
                                        <h2 className='text-2xl text-yellow-400 font-semibold'>{phone.rating}</h2>
                                        <p className=' text-sky-600 font-semibold -ml-8'>Uploaded Time: {phone.time} a.m</p>
                                        <h2 className=' text-blue-400 font-semibold'>Location: {phone.location}</h2>


                                    </div>
                                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${phone.resale_price}</p>
                                </div>
                            </div>)
                        }
                    })
                }
            </div>
            <div className='card-actions justify-center mt-6'>
                <Link to='/product'><button className="btn btn-secondary text-white px-12">Show More</button></Link>
            </div>
        </div>
    );
};

export default AdvertisedItem;