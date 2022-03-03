import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import IntroSection from '../IntroSection/IntroSection';
import OurActivities from '../OurActivities/OurActivities';
import Newsletter from '../Newsletter/Newsletter'
import TeamWork from '../TeamWork/TeamWork';

const About = () => {
    return (
        <div>
            <Navigation></Navigation>
            <IntroSection></IntroSection>
            <OurActivities></OurActivities>
            <Newsletter></Newsletter>
            <TeamWork></TeamWork>
            <Footer></Footer>
        </div>
    );
};

export default About;