import React from 'react';
import Carousel from 'react-grid-carousel'

import bkash from '../../../Media/brands-logo/bkash.png';
import nagad from '../../../Media/brands-logo/nagad.png';
import banglalink from '../../../Media/brands-logo/banglalink.png';
import robi from '../../../Media/brands-logo/robi.png';
import citybank from '../../../Media/brands-logo/citybank.png';
import usbangla from '../../../Media/brands-logo/usbangla.png';
import abbank from '../../../Media/brands-logo/abbank.png';
import beximco from '../../../Media/brands-logo/beximco.png';
import gp from '../../../Media/brands-logo/grameenphone.png';
import ific from '../../../Media/brands-logo/ific.png';
import akash from '../../../Media/brands-logo/akash.png';
import desco from '../../../Media/brands-logo/desco.png';
import regent from '../../../Media/brands-logo/regent.png';
import eximbank from '../../../Media/brands-logo/eximbank.png';
import minister from '../../../Media/brands-logo/ministertv.png';
import symphony from '../../../Media/brands-logo/symphony.png';
import { Typography } from '@mui/material';

const OurClients = () => {
    return (
        <div >
            <Typography sx={{ my: 5, letterSpacing: 6, color: '#232323' }} variant="h2">
                Our Clients
            </Typography>
            <Typography sx={{ mb: 5, fontSize: '1.2rem' }} variant='subtitle' color='text.secondary'>
                In the last few years We have provided Web desigining, TVC, OVC, SEO, and Promotional Content Desigining  Services to 150+ Clients.
            </Typography>
            <br />
            <Carousel cols={4} rows={2} gap={3} autoplay={1500} loop={true} >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '30px' }} src={bkash} alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src={banglalink} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src={nagad} alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src={robi} alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src={citybank} alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src={usbangla} alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src={abbank} alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src={beximco} alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src={gp} alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src={ific} alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src={akash} alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src={desco} alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src={eximbank} alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src={regent} alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src={minister} alt="" />
                </Carousel.Item >
                <Carousel.Item>
                    <img style={{ width: "300px", height: "150px", padding: '10px 0' }} src={symphony} alt="" />
                </Carousel.Item >
            </Carousel>
            <br />
        </div >
    );
};

export default OurClients;