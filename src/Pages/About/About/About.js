import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import IntroSection from '../IntroSection/IntroSection';
import OurActivities from '../OurActivities/OurActivities';
import TheTeam from '../TheTeam/TheTeam';

const About = () => {
    return (
        <div>
            <Navigation></Navigation>
            <IntroSection></IntroSection>
            <OurActivities></OurActivities>
            <TheTeam></TheTeam>
            <Footer></Footer>
        </div>
    );
};

export default About;