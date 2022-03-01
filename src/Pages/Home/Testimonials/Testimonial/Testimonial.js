import { Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-grid-carousel';
import Rating from '@mui/material/Rating';
const Testimonial = ({ review }) => {
    return (
        <Carousel.Item>
            <img style={{ width: '150px', height: '150px', borderRadius: '50%', padding: 2 }} src={review.img} alt="" />
            <br />
            <Rating sx={{ mt: 2 }} name="read-only" value={review.rating} readOnly />
            <Typography variant="body1" gutterBottom sx={{ color: '#c9c9c9', marginY: 2 }}>
                {review.comment}
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ color: '#CACACA' }}>
                {review.name}
            </Typography>
        </Carousel.Item>

    );
};

export default Testimonial;


