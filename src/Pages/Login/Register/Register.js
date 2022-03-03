import { Alert, Box, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const theme = createTheme({

    palette: {
        primary: {
            main: '#212121',
        },
        secondary: {
            main: '#597DA0',
        }
    }
});

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { user, registerWithEmailAndPassword, isLoading, authError } = useAuth();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        if (data.password !== data.password2) {
            alert('Password did not match!');
            return;
        }
        registerWithEmailAndPassword(data.email, data.password, data.name, navigate);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className='login-page'>
                <Grid container>
                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ my: 10, paddingY: 10, mx: 'auto', backgroundColor: 'white', borderRadius: '5%' }}>
                        <Box sx={{ paddingX: 5 }}>
                            <Typography sx={{ my: 4, fontWeight: 'bold', color: '#232323' }} variant='h4'>
                                Register
                            </Typography>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <TextField sx={{ my: 2 }} fullWidth  {...register("name", { required: true })} id="standard-basic" label="Your Name" variant="standard" />
                                {errors.name && <span style={{ color: 'red' }}>This field is required</span>}
                                <br />
                                <TextField sx={{ my: 2 }} fullWidth
                                    {...register("email", { required: true })}
                                    id="standard-basic"
                                    label="Your Email"
                                    type="email"
                                    variant="standard" />
                                {errors.email && <span style={{ color: 'red' }}>This field is required</span>}
                                <br />

                                <TextField sx={{ my: 2 }} fullWidth
                                    {...register("password", { required: true })}
                                    id="standard-basic"
                                    label="Your Password"
                                    type="password"
                                    variant="standard" />
                                {errors.password && <span style={{ color: 'red' }}>This field is required</span>}
                                <br />

                                <TextField
                                    sx={{ my: 2 }} fullWidth
                                    {...register("password2", { required: true })}
                                    id="standard-basic"
                                    label="Re-type Your Password"
                                    type="password"
                                    variant="standard" />
                                {errors.password2 && <span style={{ color: 'red' }}>This field is required</span>}
                                <br />

                                <Button sx={{ width: '100%', my: 5, backgroundColor: '#212121' }} variant="contained" type='submit'>
                                    Register
                                </Button>

                                <Link to="/login">
                                    <Button color='secondary' variant="text">Already a User? Please Sign In!</Button>
                                </Link>
                            </form>
                            {isLoading && <CircularProgress color="inherit" />}
                            {user?.email && <Alert severity="success">User Created Successfully!</Alert>
                            }
                            {authError && <Alert severity="error">{authError}</Alert>
                            }

                        </Box>
                    </Grid>
                </Grid>

            </div>
        </ThemeProvider>
    );
};

export default Register;