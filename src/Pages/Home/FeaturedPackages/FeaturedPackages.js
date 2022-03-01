import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import FeaturedPackage from '../FeaturedPackage/FeaturedPackage';

const FeaturedPackages = () => {

    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('./availablePackagesData.json')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])

    return (
        <Box sx={{ paddingY: 5, backgroundColor: '#EFF4F5' }}>
            <Typography sx={{ marginBottom: 5, color: '#4CC2C0' }} variant="h2" component="div" gutterBottom>
                Our Pricing and Packages
            </Typography>
            <Typography sx={{ color: 'text.secondary', width: '70%', mx: 'auto', mb: 4 }} variant="body1" >
                As we understand the demand and budget of our customers we are offering different affordable Packages. We also provide customized service packages!
            </Typography>

            <Grid container spacing={2} sx={{ my: 2 }}>
                {
                    packages?.map(singlePackage => <FeaturedPackage
                        key={singlePackage.name}
                        singlePackage={singlePackage}
                    ></FeaturedPackage>)
                }
            </Grid>
        </Box>
    );
};

export default FeaturedPackages;