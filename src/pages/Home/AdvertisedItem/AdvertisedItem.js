import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AdvertisedItem = () => {
    const advertised = useLoaderData()
    console.log(advertised);
    return (
        <div className='text-xl font-bold my-8 text-center'>
            <h2>This is Total 0 Advertised Item</h2>
        </div>

    );
};

export default AdvertisedItem;