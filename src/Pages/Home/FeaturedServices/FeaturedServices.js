import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import SingleService from '../SingleService/SingleService';


const FeaturedServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://floating-lowlands-12971.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <Box sx={{ paddingY: 5, backgroundColor: '#EFF4F5' }}>
                <Typography sx={{ marginBottom: 5, letterSpacing: 6, color: '#232323', fontSize: { xs: '2em', sm: '3.5em' } }} component="div" gutterBottom>
                    Our Services
                </Typography>

                <Grid
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    spacing={2}
                    container >
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