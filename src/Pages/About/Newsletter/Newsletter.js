import { Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/system';
const OurProjects = () => {
    return (
        <Grid container spacing={2} sx={{ my: 10, padding: 5, backgroundColor: 'black', color: 'white', textAlign: 'start' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} >
                <Typography sx={{ fontSize: '2.5rem', my: 2 }}>
                    NEWSLETTER
                </Typography>
                <TextField
                    type="email"
                    placeholder="Email"
                    sx={{ backgroundColor: 'gray', width: '80%', my: 2, mr: 2 }}
                    variant="outlined" />
                <Button variant='text' sx={{ borderRadius: 0, backgroundColor: 'gray', fontSize: '1.3rem', color: 'white', my: 2, padding: '10px 20px' }}>SUBSCRIBE</Button>

                <Box sx={{ my: 3 }}>
                    <FacebookOutlinedIcon sx={{ color: 'white', padding: 0.5, fontSize: '2rem', borderRadius: '50%' }}></FacebookOutlinedIcon>

                    <GoogleIcon sx={{ color: 'white', padding: 0.5, mx: 2, fontSize: '2rem', borderRadius: '50%' }}></GoogleIcon>

                    <LinkedInIcon sx={{ color: 'white', padding: 0.5, fontSize: '2rem', borderRadius: '50%' }}></LinkedInIcon>
                </Box>
            </Grid>
        </Grid>
    );
};

export default OurProjects;