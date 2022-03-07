import * as React from 'react';
import Box from '@mui/material/Box';
import './TopBanner.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
const TopBanner = () => {
    const myRef = React.useRef(null)
    const navigate = useNavigate();
    const theme = createTheme({
        palette: {
            primary: {
                main: "#FFFFFF"
            }
        }
    });

    const handleMoreAboutBtn = () => {
        navigate('/about')
    }

    const handleGetStarted = () => {
        myRef.current.scrollIntoView()
    }

    return (
        <ThemeProvider theme={theme}>
            <Box className='top-banner-heading' sx={{ textAlign: 'start', flexGrow: 1, p: 10 }}>
                <Typography color="#727578" sx={{ fontSize: { xs: '0.6rem', sm: '1.2rem', md: '1.5rem' }, fontWeight: 'bold', letterSpacing: 2 }}>
                    WELCOME TO GO-DIGITAL
                </Typography>

                <Typography
                    color="#e0dbdb"
                    sx={{ fontSize: { xs: '1.3rem', sm: '2.5rem', md: '3.5rem' }, fontWeight: 'bold', lineHeight: 1.5, letterSpacing: 1.5 }}>
                    We are a creative group
                    <br />
                    of people who design
                    <br />
                    influential brands and
                    <br />
                    digital experiences.
                </Typography>

                <Button onClick={handleGetStarted} size='large' sx={{ borderRadius: 0, my: 4, mr: 4 }} variant="outlined" color="primary">
                    <a href="#featuredPackages" style={{ textDecoration: 'none', color: 'white' }}>Get Started</a>
                </Button>
                <Button onClick={handleMoreAboutBtn} size='large' sx={{ borderRadius: 0 }} variant="outlined">More About Us</Button>

            </Box>
        </ThemeProvider>
    );
};

export default TopBanner;

