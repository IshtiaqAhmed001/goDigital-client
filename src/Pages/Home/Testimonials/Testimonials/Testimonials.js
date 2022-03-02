import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import Testimonial from '../Testimonial/Testimonial';
import './Testimonial.css';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://floating-lowlands-12971.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className='testimonial-page'>
            <Typography sx={{ paddingY: 4, letterSpacing: 6, color: '#FEFEFE', fontSize: { xs: '2em', sm: '3.5em' } }} >
                Testimonials
            </Typography>
            <Carousel className='carousel-container' >
                {
                    reviews?.map(review => <Testimonial
                        key={review.name}
                        review={review}
                    ></Testimonial>)
                }
            </Carousel>
        </div>
    );
};

export default Testimonials;