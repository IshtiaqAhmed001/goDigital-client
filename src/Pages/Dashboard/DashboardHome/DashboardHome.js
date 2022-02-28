import { Typography } from '@mui/material';
import React from 'react';
import Orders from '../Orders/Orders';

const DashboardHome = () => {
    return (
        <Typography paragraph>
            <Orders></Orders>
        </Typography>
    );
};

export default DashboardHome;