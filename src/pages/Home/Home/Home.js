import React from 'react';
import useTitle from '../../../hooks/title/UseTitle';
import Banner from '../../Banner/Banner';
import Category from '../../Categories/Category';
import ExtraSection from '../../ExtraSection/ExtraSection';
import ProductSummeryCard from '../../ProductSummeryCard/ProductSummeryCard';
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


        </div>
    );
};

export default Home;