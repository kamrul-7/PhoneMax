import React from 'react';
import Banner from '../../Banner/Banner';
import Extra from '../../ExtraSection/Extra';
import ExtraSection from '../../ExtraSection/ExtraSection';
import AdvertisedItem from '../AdvertisedItem/AdvertisedItem';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedItem></AdvertisedItem>
            <ProductCategories></ProductCategories>
            <ExtraSection></ExtraSection>

            <h2>This is home</h2>
        </div>
    );
};

export default Home;