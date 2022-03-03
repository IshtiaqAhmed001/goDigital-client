import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import './WhatWeOffer.css';
const WhatWeOffer = () => {
    return (
        <div className='weOffer-page'>
            <Typography sx={{ paddingY: 4, color: '#FEFEFE', letterSpacing: 6, fontSize: { xs: '2em', sm: '3.5em' } }}  >
                What We Offer
            </Typography>


            <Grid container spacing={4} sx={{ width: '90%', mx: 'auto', my: 2, padding: 3 }}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant='h2' sx={{ fontWeight: 'bold', color: '#FF497C' }}>Strategy</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img style={{ width: '300px', height: '300px', borderRadius: '50%', border: '8px solid #000108', padding: '5px' }} src='https://i.ibb.co/85pRrwQ/strategy.jpg' alt="" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant='body1'>We define your competition and target audience. Discover what is working in your online industry, then design your website accordingly.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant='h2' sx={{ fontWeight: 'bold', color: '#A0CE4E' }}>Design</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img style={{ width: '300px', height: '300px', borderRadius: '50%', border: '8px solid #000108', padding: '5px' }} src="https://i.ibb.co/dtzgn9M/design.jpg" alt="" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant='body1'>Color scheme, layout, sitemap, and style. We will bring your brand to life with a one of a kind masterpiece, built just for you.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant='h2' sx={{ fontWeight: 'bold', color: '#00BEA3' }}>Develop</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img style={{ width: '300px', height: '300px', borderRadius: '50%', border: '8px solid #000108', padding: '5px' }} src="https://i.ibb.co/3zjYDw8/develop.jpg" alt="" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant='body1'>We turn your ideas into a reality. Our website is placed on a "development server" where you get to watch the whole process, live.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant='h2' sx={{ fontWeight: 'bold', color: '#F1894C' }}>Support</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img style={{ width: '300px', height: '300px', borderRadius: '50%', border: '8px solid #000108', padding: '5px' }} src="https://i.ibb.co/2FmKT62/support.jpg" alt="" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant='body1'>This is where you go live, to the world. Design, marketing, and maintenance; we'll be at your side for the life of your site.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </div >
    );
};

export default WhatWeOffer;