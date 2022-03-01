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

const OurClients = () => {
    return (
        <div>
            <h1>Our Clients</h1>

            <Carousel cols={4} rows={1} gap={2} autoplay={1500} loop={true} >
                <Carousel.Item sx={{ padding: 5 }}>
                    <img width="200px" src={bkash} alt="" />
                </Carousel.Item >
                <Carousel.Item sx={{ padding: 5 }}>
                    <img width="200px" src={banglalink} alt="" />
                </Carousel.Item>
                <Carousel.Item sx={{ padding: 5 }}>
                    <img width="200px" src={nagad} alt="" />
                </Carousel.Item >
                <Carousel.Item sx={{ padding: 5 }}>
                    <img width="200px" src={robi} alt="" />
                </Carousel.Item >
                <Carousel.Item sx={{ padding: 5 }}>
                    <img width="200px" src={citybank} alt="" />
                </Carousel.Item >
                <Carousel.Item sx={{ padding: 5 }}>
                    <img width="200px" src={usbangla} alt="" />
                </Carousel.Item >
                <Carousel.Item sx={{ padding: 5 }}>
                    <img width="200px" src={abbank} alt="" />
                </Carousel.Item >
                <Carousel.Item sx={{ padding: 5 }}>
                    <img width="200px" src={beximco} alt="" />
                </Carousel.Item >
                <Carousel.Item sx={{ padding: 5 }}>
                    <img width="200px" src={gp} alt="" />
                </Carousel.Item >
                <Carousel.Item sx={{ padding: 5 }}>
                    <img width="200px" src={ific} alt="" />
                </Carousel.Item >
                <Carousel.Item sx={{ padding: 5 }}>
                    <img width="200px" src={akash} alt="" />
                </Carousel.Item >
                <Carousel.Item sx={{ padding: 5 }}>
                    <img width="200px" src={desco} alt="" />
                </Carousel.Item >

            </Carousel>

        </div>
    );
};

export default OurClients;