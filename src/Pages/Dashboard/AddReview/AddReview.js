import React, { useState } from 'react';
import { Alert, Box, TextareaAutosize, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const AddReview = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false);

    const onSubmit = data => {
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                }
            })
    }


    return (
        <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={6} sx={{ mx: 'auto', backgroundColor: 'white', borderRadius: '5%' }}>
                <Box sx={{ paddingX: 5 }}>
                    <Typography sx={{ my: 2, fontWeight: 'bold', color: '#232323' }} variant='h4'>
                        Add a Review
                    </Typography>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <TextField fullWidth  {...register("name", { required: true })}
                            label="Your Name"
                            variant="standard" />
                        {errors.name && <span style={{ color: 'red' }}>This field is required</span>}
                        <br />


                        <TextField sx={{ my: 2 }} fullWidth  {...register("img", { required: true })}
                            label="Image Url"
                            variant="standard" />
                        {errors.img && <span style={{ color: 'red' }}>This field is required</span>}
                        <br />
                        <TextField sx={{ mb: 2 }} fullWidth  {...register("rating", { required: true })}
                            label="Rating(1-5)"
                            type="number"
                            variant='standard'
                            inputProps={{ inputMode: 'numeric', pattern: '[1-5]*', max: 5, min: 1 }}
                        />
                        {errors.rating && <span style={{ color: 'red' }}>This field is required</span>}
                        <br />

                        <TextareaAutosize
                            fullWidth  {...register("description", { required: true })}
                            minRows={5}
                            aria-label="write review"
                            placeholder="Write review"
                            style={{ width: '100%', margin: '20px 0' }}
                        />
                        {errors.comment && <span style={{ color: 'red' }}>This field is required</span>}
                        <br />

                        <Button sx={{ width: '100%', my: 2, backgroundColor: '#212121' }} variant="contained" type='submit'>
                            Submit
                        </Button>

                    </form>
                    {success && <Alert severity="success">Review added successfully. Check homepage!</Alert>
                    }

                </Box>
            </Grid>
        </Grid>
    );
};

export default AddReview;