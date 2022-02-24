import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import FeaturedServices from '../FeaturedServices/FeaturedServices';
import Testimonials from '../Testimonials/Testimonials/Testimonials';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <FeaturedServices></FeaturedServices>
            <Testimonials></Testimonials>

        </div>
    );
};

export default Home;