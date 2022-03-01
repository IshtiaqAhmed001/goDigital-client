import React from 'react';
import Grid from '@mui/material/Grid';
import img1 from '../../../Media/Icons/strategy.jpg';
import img2 from '../../../Media/Icons/design.jpg';
import img3 from '../../../Media/Icons/develop.jpg';
import img4 from '../../../Media/Icons/support.jpg';
import { Typography } from '@mui/material';
import './WhatWeOffer.css';
const WhatWeOffer = () => {
    return (
        <div className='weOffer-page'>
            <Typography sx={{ paddingY: 4, color: '#FEFEFE' }} variant="h2" component="div" gutterBottom>
                What We Offer
            </Typography>


            <Grid container spacing={2} sx={{ width: '90%', mx: 'auto', padding: 2 }}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant='h2' sx={{ fontWeight: 'bold', color: '#FF497C' }}>Strategy</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img style={{ width: '300px', height: '300px', borderRadius: '50%', border: '8px solid #000108', padding: '5px' }} src={img1} alt="" />
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
                            <img style={{ width: '300px', height: '300px', borderRadius: '50%', border: '8px solid #000108', padding: '5px' }} src={img2} alt="" />
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
                            <img style={{ width: '300px', height: '300px', borderRadius: '50%', border: '8px solid #000108', padding: '5px' }} src={img3} alt="" />
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
                            <img style={{ width: '300px', height: '300px', borderRadius: '50%', border: '8px solid #000108', padding: '5px' }} src={img4} alt="" />
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