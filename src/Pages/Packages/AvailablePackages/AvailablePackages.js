import React, { useEffect, useState } from 'react';
import { Alert, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import SinglePackage from '../SinglePackage/SinglePackage';


const AvailablePackages = () => {
    const [orderSuccess, setOrderSuccess] = useState(false);

    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('./availablePackagesData.json')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])


    return (
        <div>
            <Box sx={{ paddingY: 8, backgroundColor: '#EFF4F5' }}>
                <Typography sx={{ marginBottom: 10, fontWeight: 'bold', color: '#4CC2C0' }} variant="h2" component="div" gutterBottom>
                    Available Packages
                </Typography>
                <Typography sx={{ marginBottom: 2, width: '25%', mx: 'auto' }} variant="h6" component="div" gutterBottom>
                    {orderSuccess && <Alert sx={{ fontWeight: 'bold' }} severity="success">Order Placed Successfully!</Alert>
                    }
                </Typography>


                <Grid container spacing={2}>
                    {
                        packages?.map(singlePackage => <SinglePackage
                            key={singlePackage.name}
                            singlePackage={singlePackage}
                            setOrderSuccess={setOrderSuccess}
                        ></SinglePackage>)
                    }
                </Grid>

            </Box>

        </div>
    );
};

export default AvailablePackages;