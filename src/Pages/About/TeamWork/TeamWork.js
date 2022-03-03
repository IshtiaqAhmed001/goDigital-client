import * as React from 'react';
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'pic1',
        imgPath:
            'https://i.ibb.co/XzrfX8v/pic1.jpg',
    },
    {
        label: 'pic2',
        imgPath:
            'https://i.ibb.co/MSHQ8Lr/pic2.jpg',
    },
    {
        label: 'pic3',
        imgPath:
            'https://i.ibb.co/mCrMcbB/pic3.jpg',
    },
    {
        label: 'pic4',
        imgPath:
            'https://i.ibb.co/LgSxF1j/pic4.jpg',
    },
];

const TeamWork = () => {


    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ flexGrow: 1, my: 4, py: 4 }}>
            <Grid container spacing={2} sx={{ width: '80%', mx: 'auto' }}>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <Box sx={{ maxWidth: 500, boxShadow: 5, padding: 1 }}>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {images.map((step, index) => (
                                <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <Box
                                            component="img"
                                            sx={{
                                                height: "100%",
                                                display: 'block',
                                                maxWidth: 500,
                                                overflow: 'hidden',
                                                width: '100%',
                                            }}
                                            src={step.imgPath}
                                            alt=""
                                        />
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} sx={{ textAlign: 'start' }}>
                    <Box>
                        <Typography sx={{ fontSize: '2.3rem', fontWeight: 'bold' }}>
                            It is teamwork that makes
                            <br />
                            the dream work
                        </Typography>
                        <Typography color='text.secondary' variant='caption'>
                            GoDigital takes pride in generating original, creative, and high-quality designs that are built using the most up-to-date coding, based on years of experience in the website development and digital marketing industries.
                        </Typography>
                        <Typography variant='body2'>
                            <List>

                                <ListItem >
                                    <ListItemIcon>
                                        <ArrowCircleRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Eye catchy contents for promotion
                                    </ListItemText>
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon>
                                        <ArrowCircleRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        GoDigital offers pixel perfect design
                                    </ListItemText>
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon>
                                        <ArrowCircleRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Discover more inventive thoughts for your ventures
                                    </ListItemText>
                                </ListItem>

                            </List>
                        </Typography>
                    </Box>

                </Grid>

            </Grid>
        </Box>
    );
};

export default TeamWork;