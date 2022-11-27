import React from 'react';
import useTitle from '../../../hooks/title/UseTitle';
import Banner from '../../Banner/Banner';
import Category from '../../Categories/Category';
import ExtraSection from '../../ExtraSection/ExtraSection';
import AdvertisedItem from '../AdvertisedItem/AdvertisedItem';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    useTitle('Home')
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