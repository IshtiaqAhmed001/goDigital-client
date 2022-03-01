import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
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
            <OurClients></OurClients>
            <Testimonials></Testimonials>

        </div>
    );
};

export default Home;