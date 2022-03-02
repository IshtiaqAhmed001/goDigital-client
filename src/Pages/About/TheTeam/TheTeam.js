import { Grid, Typography } from '@mui/material';
import React from 'react';
import './TheTeam.css';

const TheTeam = () => {
    return (
        <div>
            <Typography variant='subtitle' color='text.secondary'>The Team</Typography>
            <Typography sx={{ fontSize: { xs: '1.5em', sm: '3.5em' } }}>Creative People</Typography>

            <Grid container spacing={2} sx={{ my: 5 }}>
                <Grid item xs={12} sm={12} md={12} lg={4}>
                    item 1
                </Grid>

            </Grid>
        </div>
    );
};

export default TheTeam;