import { Button, Divider, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import './Footer.css';
import location from '../../../Media/Icons/location.png';
import email from '../../../Media/Icons/email.png';
import phone from '../../../Media/Icons/phone.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'; import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/system';

const Footer = () => {
    return (
        <div className='footer-container'>
            <Grid container spacing={2} sx={{ py: 5 }}>
                <Grid item md={12} lg={4}>
                    <FacebookOutlinedIcon sx={{ color: '#4267B2', backgroundColor: 'white', padding: 0.5, fontSize: '2rem', borderRadius: '50%' }}></FacebookOutlinedIcon>

                    <GoogleIcon sx={{ color: '#EA4335', backgroundColor: 'white', padding: 0.5, mx: 2, fontSize: '2rem', borderRadius: '50%' }}></GoogleIcon>

                    <LinkedInIcon sx={{ color: '#0e76a8', backgroundColor: 'white', padding: 0.5, fontSize: '2rem', borderRadius: '50%' }}></LinkedInIcon>

                </Grid>
                <Grid item md={12} lg={4}>
                    <Typography variant='h3' sx={{ fontWeight: 'bold', color: 'white' }}>GoDigital</Typography>
                </Grid>
                <Grid item md={12} lg={4}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', backgroundColor: 'white', p: 0.5, width: '70%' }}>
                        <TextField type='email' placeholder='Email Address' variant="standard" sx={{ width: '100%' }} />
                        <Button> <EmailIcon sx={{ color: '#3eb79f', fontSize: '2rem' }} /></Button>
                    </Box>
                </Grid>
            </Grid>

            <hr style={{ border: '1px solid #828282', margin: '0px 0' }} />

            <Grid container spacing={2} sx={{ py: 15 }}>
                < Grid item md={12} lg={4}>
                    <img src={location} alt="" />
                    <Typography sx={{ color: 'gray' }} variant='body2'>
                        Block C, Bashundhara R/A
                        <br />
                        Dhaka, Bangladesh
                    </Typography>
                </Grid>
                <Grid item md={12} lg={4}>
                    <img src={email} alt="" />
                    <Typography sx={{ color: 'gray' }} variant='body2'>
                        ishtiaq.wasi@gmail.com
                    </Typography>
                </Grid>
                <Grid item md={12} lg={4}>
                    <img src={phone} alt="" />
                    <Typography sx={{ color: 'gray' }} variant='body2'>
                        +8801685490555
                    </Typography>
                </Grid>
            </Grid>
            <Typography sx={{ color: 'white', backgroundColor: '#3eb79f', padding: 3 }} variant='body2'>
                © 2022 GoDigital Inc. All Rights Reserved
            </Typography>
        </div >
    );
};

export default Footer;