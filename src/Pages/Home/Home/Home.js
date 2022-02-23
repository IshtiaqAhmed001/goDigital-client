import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import FeaturedServices from '../FeaturedServices/FeaturedServices';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <FeaturedServices></FeaturedServices>
        </div>
    );
};

export default Home;