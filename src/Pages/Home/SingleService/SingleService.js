import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import './SingleService.css';
const SingleService = ({ service }) => {
    const handleBooking = e => {
        e.preventDefault();
    }
    return (
        <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={12} sm={6} md={4}>
            <Card className='card-item' sx={{ padding: 2, maxWidth: 345, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CardMedia
                    sx={{ width: '50%' }}
                    component="img"
                    image={service.img}
                    alt="green iguana"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {service.name}
                    </Typography>
                    <Typography className='card-description' sx={{ textAlign: 'center' }} variant="body2" color="text.secondary">
                        {service.description}
                    </Typography>
                </CardContent>
                <CardActions >
                    {/* <Button onClick={handleBooking} sx={{ fontWeight: 'bold' }} color="inherit" size="medium">Book Service</Button> */}
                </CardActions>
            </Card>
        </Grid>
    );
};

export default SingleService;