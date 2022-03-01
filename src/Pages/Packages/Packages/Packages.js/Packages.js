import React from 'react';
import AvailablePackages from '../../AvailablePackages/AvailablePackages';
import Navigation from '../../../Shared/Navigation/Navigation';
import Footer from '../../../Shared/Footer/Footer';
const Packages = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AvailablePackages></AvailablePackages>
            <Footer></Footer>
        </div>
    );
};

export default Packages;