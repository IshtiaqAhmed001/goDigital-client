import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import IntroSection from '../IntroSection/IntroSection';
import OurActivities from '../OurActivities/OurActivities';
import OurProjects from '../OurProjects/OurProjects'

const About = () => {
    return (
        <div>
            <Navigation></Navigation>
            <IntroSection></IntroSection>
            <OurActivities></OurActivities>
            <OurProjects></OurProjects>
            <Footer></Footer>
        </div>
    );
};

export default About;