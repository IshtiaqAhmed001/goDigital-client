import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './IntroSection.css';

const IntroSection = () => {
    // scroll to the top once renderred
    window.scrollTo(0, 0);

    return (
        <div className='intro-section' style={{ padding: '40px 0' }}>
            <Box sx={{ py: 10 }}>
                <Typography sx={{ letterSpacing: 6, color: 'white' }} variant="body2">
                    About Us
                </Typography>
                <Typography sx={{ letterSpacing: 6, lineHeight: 1.5, color: 'white', fontSize: { sm: '5.5em', xs: '2.5em', md: '6.5em' } }} >
                    We are a 360°
                    <br />
                    Digital Agency
                </Typography>
            </Box>
        </div>
    );
};

export default IntroSection;