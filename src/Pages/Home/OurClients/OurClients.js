import React from 'react';
import Carousel from 'react-grid-carousel'
import { Typography } from '@mui/material';

const OurClients = () => {
    return (
        <div >
            <Typography sx={{ my: 5, letterSpacing: 6, color: '#232323', fontSize: { xs: '2em', sm: '3.5em' } }} >
                Our Clients
            </Typography>
            <Typography sx={{ mb: 5, fontSize: '1.2rem' }} variant='subtitle' color='text.secondary'>
                In the last few years We have provided Web desigining, TVC, OVC, SEO, and Promotional Content Desigining  Services to 150+ Clients.
            </Typography>
            <br />
            <Carousel cols={4} rows={2} gap={3} autoplay={1500} loop={true} >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '30px' }} src="https://i.ibb.co/tBrs7yk/bkash.png" alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src="https://i.ibb.co/tHvQ5rX/banglalink.png" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src="https://i.ibb.co/ftB2C5K/nagad.png" alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src="https://i.ibb.co/FY7fRXb/robi.png" alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src="https://i.ibb.co/N2t3d2c/citybank.png" alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src="https://i.ibb.co/TqkH4LQ/usbangla.png" alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src="https://i.ibb.co/JdwPdf7/abbank.png" alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src="https://i.ibb.co/7vdJb6P/beximco.png" alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src="https://i.ibb.co/YX1NpNJ/grameenphone.png" alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src="https://i.ibb.co/VHKnR0g/ific.png" alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src="https://i.ibb.co/yk8hK6D/akash.png" alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src="https://i.ibb.co/BKqbSBm/desco.png" alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src="https://i.ibb.co/Q97mnpr/eximbank.png" alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src="https://i.ibb.co/FsJw5pz/regent.png" alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src="https://i.ibb.co/QkRxLnq/ministertv.png" alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src="https://i.ibb.co/m8MtfmH/symphony.png" alt="" />
                </Carousel.Item >
            </Carousel>
            <br />
        </div >
    );
};

export default OurClients;