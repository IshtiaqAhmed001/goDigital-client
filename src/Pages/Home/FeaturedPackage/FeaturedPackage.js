import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const FeaturedPackage = ({ singlePackage }) => {
    const navigate = useNavigate();
    const handleExploreBtn = e => {
        navigate('/packages')
    }

    return (
        <>
            <Grid data-aos="flip-left"
                sx={{ display: 'flex', justifyContent: 'center' }} item xs={12} sm={4} md={2}>
                <Card className='single-card' sx={{ padding: 2, maxWidth: 345, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CardMedia
                        sx={{ width: "50%" }}
                        component="img"
                        image={singlePackage.img}
                        alt="green iguana"
                    />
                    <CardContent >
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                            {singlePackage.packageName}
                        </Typography>
                        <Typography className='card-body' color="text.secondary" gutterBottom variant="caption" component="div">
                            {singlePackage.category}
                        </Typography>

                        <Typography className='price' sx={{ fontWeight: 'bold', color: '#4CC2C0' }} variant="caption" component="div" gutterBottom>
                            {singlePackage.price}
                        </Typography>
                    </CardContent>
                    <CardActions >
                        <Button onClick={handleExploreBtn} variant='contained' sx={{ backgroundColor: '#36D7B7' }} color="inherit" size="small">See Details</Button>
                    </CardActions>
                </Card>

            </Grid>

        </>
    );
};

export default FeaturedPackage;