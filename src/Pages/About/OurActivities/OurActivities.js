import { Grid, Typography } from '@mui/material';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import DiamondIcon from '@mui/icons-material/Diamond';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const OurActivities = () => {
    return (
        <div>
            <Typography data-aos="fade-right" data-aos-duration="1000"
                sx={{ width: '50%', mx: 'auto', mt: 10, mb: 2, fontSize: { xs: '1.2em', sm: '2em' } }}>
                "We love what we do and we love helping others succeed at what they love to do."
            </Typography>
            <Typography data-aos="fade-right" data-aos-duration="3000"
                variant='body1' sx={{ width: '50%', mx: 'auto', mb: 3 }}>
                Isthiaq Ahmed Chowdhury, <span style={{ color: '#00BEA3' }}>CEO</span>
            </Typography>
            <Grid container spacing={2} sx={{ width: '90%', mx: 'auto', py: 10 }}>
                < Grid data-aos="flip-left" data-aos-duration="3000"
                    item xs={12} sm={12} md={12} lg={4}>
                    <PersonIcon
                        sx={{ fontSize: '10rem', backgroundColor: '#A0CE4E', color: 'white', padding: 3, borderRadius: '50%' }}></PersonIcon>

                    <Typography sx={{ fontWeight: 'bold', my: 2 }} variant='h5'>Who We Are</Typography>

                    <Typography variant='body2'>
                        We are a team of Web designers, SEO experts and Content creators who love collaborating with people and businesses to help them grow and achieve success online.
                    </Typography>
                </Grid>
                < Grid data-aos="flip-right" data-aos-duration="3000"
                    item xs={12} sm={12} md={12} lg={4}>
                    <DiamondIcon sx={{ fontSize: '10rem', backgroundColor: '#00BEA3', color: 'white', padding: 3, borderRadius: '50%' }}></DiamondIcon>

                    <Typography sx={{ fontWeight: 'bold', my: 2 }} variant='h5'>What We Do</Typography>

                    <Typography variant='body2'>
                        We are committed to bring everything we have to the table for our clients to make their dream happen. We provide custom websites and social media contents to gain more customers.</Typography>
                </Grid>
                < Grid data-aos="flip-left" data-aos-duration="3000"
                    item xs={12} sm={12} md={12} lg={4}>
                    <ThumbUpIcon sx={{ fontSize: '10rem', backgroundColor: '#F1894C', color: 'white', padding: 3, borderRadius: '50%' }}></ThumbUpIcon>

                    <Typography sx={{ fontWeight: 'bold', my: 2 }} variant='h5'>Why We Do It</Typography>

                    <Typography variant='body2'>
                        We all like what we do, and believe that this enthusiasm contributes to the high quality of our work. Working with clients who are passionate about their work results in a rewarding and enjoyable engagement for all parties involved. </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default OurActivities;