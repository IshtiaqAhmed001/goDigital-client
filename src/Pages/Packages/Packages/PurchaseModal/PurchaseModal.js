import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const PurchaseModal = ({ openPurchase, handlePurchaseClose, setOrderSuccess, packageDetails }) => {
    const { packageName, duration, price } = packageDetails;
    const { user } = useAuth();
    const orderDate = new Date().toLocaleDateString();

    const initialOrderInfo = { userName: user.displayName, email: user.email, phone: '' };
    const [orderInfo, setOrderInfo] = useState(initialOrderInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newOrderInfo = { ...orderInfo };
        newOrderInfo[field] = value;
        setOrderInfo(newOrderInfo);

    }

    const handleBuyNow = e => {
        //    collect data 
        const order = {
            ...orderInfo,
            orderDate: orderDate,
            packageName: packageName,
            price: price
        }
        // send data to server 
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOrderSuccess(true);
                    handlePurchaseClose();
                }
            })

        e.preventDefault();
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openPurchase}
            onClose={handlePurchaseClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openPurchase}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {packageName}
                    </Typography>
                    <form onSubmit={handleBuyNow} >
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            disabled
                            defaultValue={orderDate}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            disabled
                            defaultValue={duration}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="userName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={user.email}
                            onBlur={handleOnBlur}
                            name="email"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue="Phone Number"
                            onBlur={handleOnBlur}
                            name="phone"
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={price}
                            size="small"
                        />
                        <Button type='submit' variant="contained">Buy Now</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default PurchaseModal;