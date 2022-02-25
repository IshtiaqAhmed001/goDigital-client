import { Alert, Box, Typography } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, logInWithEmailAndPassword, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const onSubmit = data => {
        logInWithEmailAndPassword(data.email, data.password, location, navigate);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    }

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

                                <TextField sx={{ my: 2 }} fullWidth
                                    {...register("email", { required: true })} id="standard-basic"
                                    label="Your Email"
                                    variant="standard" />
                                {errors.email && <span style={{ color: 'red' }}>This field is required</span>}
                                <br />

                                <TextField
                                    sx={{ my: 2 }} fullWidth
                                    {...register("password", { required: true })} id="standard-basic"
                                    label="Your Password"
                                    type="password"
                                    variant="standard" />
                                {errors.password && <span style={{ color: 'red' }}>This field is required</span>}
                                <br />

                                <Button sx={{ width: '100%', my: 5, backgroundColor: '#212121' }} variant="contained" type='submit'>
                                    Login
                                </Button>
                                <Button color='secondary' variant="contained" onClick={handleGoogleSignIn}>Google Sign In</Button>
                                <br />
                                <Link to="/register">
                                    <Button color='secondary' variant="text">New User? Please Register!</Button>
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

export default Login;