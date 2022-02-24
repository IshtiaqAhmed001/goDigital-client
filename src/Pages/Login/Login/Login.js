import { Box, Typography } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { createTheme, ThemeProvider } from '@mui/material/styles';


import './Login.css';

const Login = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#212121',
            }
        }
    });


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // console.log(watch("example")); // watch input value by passing the name of it
    return (
        <ThemeProvider theme={theme}>
            <div className='login-page'>
                {/* className='login-page' */}
                <Grid container>
                    <Grid item xs={12} sm={6} md={4} lg={4} sx={{ my: 10, paddingY: 10, mx: 'auto', backgroundColor: 'white', borderRadius: '5%' }}>
                        <Box sx={{ paddingX: 5 }}>
                            <Typography sx={{ my: 4, fontWeight: 'bold', color: '#232323' }} variant='h4'>
                                Login
                            </Typography>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <TextField sx={{ my: 2 }} fullWidth  {...register("name")} id="standard-basic" label="Your Email" variant="standard" />
                                {errors.password && <span style={{ color: 'red' }}>This field is required</span>}
                                <br />

                                <TextField sx={{ my: 2 }} fullWidth {...register("password", { required: true })} id="standard-basic" label="Your Password" variant="standard" />
                                {errors.password && <span style={{ color: 'red' }}>This field is required</span>}
                                <br />
                                <Button sx={{ width: '100%', my: 5, backgroundColor: '#212121' }} variant="contained" type='submit'>
                                    Submit
                                </Button>
                            </form>
                        </Box>
                    </Grid>
                </Grid>

            </div>
        </ThemeProvider>
    );
};

export default Login;