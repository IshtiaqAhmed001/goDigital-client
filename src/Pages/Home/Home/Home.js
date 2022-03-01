import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import FeaturedPackages from '../FeaturedPackages/FeaturedPackages';
import FeaturedServices from '../FeaturedServices/FeaturedServices';
import OurClients from '../OurClients/OurClients';
import Testimonials from '../Testimonials/Testimonials/Testimonials';
import TopBanner from '../TopBanner/TopBanner';
import WhatWeOffer from '../WhatWeOffer/WhatWeOffer';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <FeaturedServices></FeaturedServices>
            <WhatWeOffer></WhatWeOffer>
            <FeaturedPackages></FeaturedPackages>
            <Testimonials></Testimonials>
            <OurClients></OurClients>
            <Footer></Footer>

        </div>
    );
};

export default Home;