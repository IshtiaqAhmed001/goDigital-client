import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import './SinglePackage.css';
const SinglePackage = ({ singlePackage }) => {
    const handleBooking = e => {
        e.preventDefault();
    }
    return (
        <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={12} sm={6} md={4}>
            <Card className='card-item' sx={{ padding: 2, maxWidth: 345, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CardMedia className='image-container'
                    sx={{ width: "50%" }}
                    component="img"
                    image={singlePackage.img}
                    alt="green iguana"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {singlePackage.name}
                    </Typography>
                    <Typography className='card-description' color="text.secondary" gutterBottom variant="caption" component="div">
                        {singlePackage.category}
                    </Typography>
                    <Typography className='card-description' sx={{ textAlign: 'left' }} variant="body2" color="text.secondary">
                        <ul>
                            {singlePackage.description.map(item => <li>
                                {item}
                            </li>)}
                        </ul>
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button onClick={handleBooking} sx={{ fontWeight: 'bold' }} color="inherit" size="medium">Order Package</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default SinglePackage;