import React, { useEffect, useState } from 'react';
import { Alert, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import SinglePackage from '../SinglePackage/SinglePackage';


const AvailablePackages = () => {
    // scroll to the top once renderred
    window.scrollTo(0, 0);

    const [orderSuccess, setOrderSuccess] = useState(false);

    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://floating-lowlands-12971.herokuapp.com/availablePackages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])


    return (
        <div>
            <Box sx={{ paddingY: 8, backgroundColor: '#EFF4F5' }}>
                <Typography data-aos="zoom-in-up" data-aos-duration="3000"
                    sx={{ marginBottom: 10, fontWeight: 'bold', color: '#4CC2C0', fontSize: { xs: '2em', sm: '3.5em' } }} component="div" gutterBottom>
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