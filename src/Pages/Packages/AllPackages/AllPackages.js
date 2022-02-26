import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import SinglePackage from '../SinglePackage/SinglePackage';


const AllPackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('./availablePackagesData.json')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])

    return (
        <div>
            <Box sx={{ paddingY: 5, backgroundColor: '#EFF4F5' }}>
                <Typography sx={{ marginBottom: 5, fontWeight: 'bold', color: '#4CC2C0' }} variant="h2" component="div" gutterBottom>
                    Available Packages
                </Typography>

                <Grid container spacing={2}>
                    {
                        packages?.map(singlePackage => <SinglePackage
                            key={singlePackage.name}
                            singlePackage={singlePackage}
                        ></SinglePackage>)
                    }
                </Grid>

            </Box>

        </div>
    );
};

export default AllPackages;