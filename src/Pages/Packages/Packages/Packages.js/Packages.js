import React from 'react';
import AvailablePackages from '../../AvailablePackages/AvailablePackages';
import Navigation from '../../../Shared/Navigation/Navigation';
const Packages = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AvailablePackages></AvailablePackages>
        </div>
    );
};

export default Packages;