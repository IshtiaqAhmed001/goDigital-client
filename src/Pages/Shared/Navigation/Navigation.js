import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

export default function ButtonAppBar() {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1, my: 5 }}>
            <AppBar style={{ background: 'black' }} position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Go Digital
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/home'><Button color="inherit">Home</Button></NavLink>

                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/about'><Button color="inherit">About</Button></NavLink>

                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/packages'><Button color="inherit">Packages</Button></NavLink>

                    {
                        user?.email ? <Box>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/dashboard'><Button color="inherit">Dashboard</Button></NavLink>

                            <Button onClick={logOut} color="inherit">Logout</Button>
                        </Box>
                            : <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/login'><Button color="inherit">Login</Button></NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
}