import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    const { user, logOut } = useAuth();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="sticky" sx={{ backgroundColor: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <NavLink to="/home"> <img style={{ width: '30px' }} src="https://i.ibb.co/QXPq7gS/go-Digital-Small.png" alt="" /></NavLink>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem key="Home" onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/home'>Home</NavLink>
                                </Typography>
                            </MenuItem>
                            <MenuItem key="About" onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/about'>About</NavLink>
                                </Typography>
                            </MenuItem>
                            <MenuItem key="Packages" onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/packages'>Packages</NavLink>
                                </Typography>
                            </MenuItem>
                            {user?.email ? <Box>
                                <MenuItem key="Dashboard" onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/dashboard'>Dashboard</NavLink>
                                    </Typography>
                                </MenuItem>

                                <MenuItem key="Logout" onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Button onClick={logOut} color="inherit">Logout</Button>
                                    </Typography>
                                </MenuItem>
                            </Box> : <MenuItem key="Login" onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/login'>Login</NavLink>
                                </Typography>
                            </MenuItem>
                            }
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <NavLink to="/home"> <img style={{ width: '30px', height: '30px' }} src="https://i.ibb.co/QXPq7gS/go-Digital-Small.png" alt="" /></NavLink>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>

                        <Button
                            key="Home"
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/home'>Home</NavLink>
                        </Button>
                        <Button
                            key="About"
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/about'>About</NavLink>
                        </Button>
                        <Button
                            key="Packages"
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/packages'>Packages</NavLink>
                        </Button>
                        {
                            user.email && <Button
                                key="Dashboard"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/dashboard'>Dashboard</NavLink>
                            </Button>
                        }
                        {
                            user.email ? <Typography
                                key="Logout"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Button onClick={logOut} color="inherit">Logout</Button>
                            </Typography> : <Button
                                key="Login"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/login'>Login</NavLink>
                            </Button>
                        }
                    </Box>
                </Toolbar>
            </Container >
        </AppBar >
    );
};
export default Navigation;
