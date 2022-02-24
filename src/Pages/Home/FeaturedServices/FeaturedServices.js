import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import SingleService from '../SingleService/SingleService';


const FeaturedServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <Box sx={{ paddingY: 5, backgroundColor: '#EFF4F5' }}>
                <Typography sx={{ marginBottom: 5, fontWeight: 'bold', color: '#232323' }} variant="h2" component="div" gutterBottom>
                    Our Services
                </Typography>

                <Grid container spacing={2}>
                    {
                        services?.map(service => <SingleService
                            key={service.name}
                            service={service}
                        ></SingleService>)
                    }
                </Grid>

            </Box>

        </div>
    );
};

export default FeaturedServices;