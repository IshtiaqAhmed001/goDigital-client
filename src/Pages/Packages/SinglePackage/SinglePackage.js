import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import './SinglePackage.css';
import PurchaseModal from '../Packages/PurchaseModal/PurchaseModal';

const SinglePackage = ({ singlePackage, setOrderSuccess }) => {

    const [openPurchase, setPurchaseOpen] = React.useState(false);
    const handlePurchaseOpen = () => setPurchaseOpen(true);
    const handlePurchaseClose = () => setPurchaseOpen(false);
    return (
        <>
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={12} sm={6} md={4}>
                <Card className='single-card' sx={{ padding: 2, maxWidth: 345, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CardMedia
                        sx={{ width: "50%" }}
                        component="img"
                        image={singlePackage.img}
                        alt="green iguana"
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                            {singlePackage.packageName}
                        </Typography>
                        <Typography className='card-body' color="text.secondary" gutterBottom variant="caption" component="div">
                            {singlePackage.category}
                        </Typography>
                        <Typography className='card-body' sx={{ textAlign: 'left' }} variant="body2" color="text.secondary">
                            <ul>
                                {singlePackage.description.map(item => <li>
                                    {item}
                                </li>)}
                            </ul>
                        </Typography>
                        <Typography className='price' sx={{ marginBottom: 5, fontWeight: 'bold', color: '#4CC2C0' }} variant="h6" component="div" gutterBottom>
                            {singlePackage.price}
                        </Typography>
                    </CardContent>
                    <CardActions >
                        <Button onClick={handlePurchaseOpen} variant='contained' sx={{ fontWeight: 'bold' }} color="inherit" size="medium">Order Package</Button>
                    </CardActions>
                </Card>
            </Grid>
            <PurchaseModal
                packageDetails={singlePackage}
                openPurchase={openPurchase}
                handlePurchaseClose={handlePurchaseClose}
                setOrderSuccess={setOrderSuccess}
            ></PurchaseModal>
        </>
    );
};

export default SinglePackage;