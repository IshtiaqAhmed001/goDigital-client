import * as React from 'react';
import Box from '@mui/material/Box';
import './TopBanner.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';


const TopBanner = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: blueGrey[900],
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Box className='top-banner-heading' sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: { sm: '6rem', xs: '3rem' }, textAlign: 'left', lineHeight: 1.2, ml: 2, color: '#232323', paddingTop: 10, display: 'flex', alignItems: 'center' }}>
                    Make Your Vision
                    <br />
                    A Reality
                    <br />
                    With Go-Digital
                </Typography>
                <Typography sx={{ textAlign: 'left', ml: 2 }}>
                    <Button sx={{ marginLeft: 'auto', marginBottom: 10, fontSize: '1.2rem', backgroundColor: "#232323", paddingX: 4, borderColor: '#232323' }} size="large" variant="contained">Learn More</Button>
                </Typography>
            </Box>
        </ThemeProvider>
    );
};

export default TopBanner;