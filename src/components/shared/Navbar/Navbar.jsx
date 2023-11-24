// import React from 'react';

import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <div>
            <AppBar sx={{ backgroundColor: '#032e4b' }} elevation={1} position="fixed">
                <Container maxWidth="2xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            // href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'sans-serif',
                                fontWeight: 400,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <span style={{ color: "#b79537" }}>Home</span>
                            <span style={{ color: '#fff' }}>Hive</span>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                color="secondary"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            {/* Mobile nav */}
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
                                    color: '#032e4b',
                                }}
                            >

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography
                                        textAlign="center"
                                        style={{ color: "#b79537" }}
                                    >
                                        <NavLink style={{ color: '#727c82' }} to={'/'}>Home</NavLink>
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography
                                        textAlign="center"
                                        style={{ color: "#b79537" }}
                                    >
                                        <NavLink style={{ color: '#727c82' }} to={'/all'}>All properties</NavLink>
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography
                                        textAlign="center"
                                        style={{ color: "#b79537" }}
                                    >
                                        <NavLink style={{ color: '#727c82' }} to={'/dashboard'}>Dashboard</NavLink>
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography
                                        textAlign="center"
                                        style={{ color: "#b79537" }}
                                    >
                                        <NavLink style={{ color: '#727c82' }} to={'/login'}>login</NavLink>
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography
                                        textAlign="center"
                                        style={{ color: "#b79537" }}
                                    >
                                        <NavLink style={{ color: '#727c82' }} to={'/signup'}>signup</NavLink>
                                    </Typography>
                                </MenuItem>
                            </Menu>
                        </Box>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'sans-serif',
                                fontWeight: 400,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <span style={{ color: "#b79537" }}>Home</span>
                            <span style={{ color: '#fff' }}>Hive</span>
                        </Typography>

                        {/* big screen nav */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 3 }}>
                            <NavLink style={{ color: '#fff' }} to={'/'}>Home</NavLink>
                            <NavLink style={{ color: '#fff' }} to={'/all'}>All properties</NavLink>
                            <NavLink style={{ color: '#fff' }} to={'/dashboard'}>Dashboard</NavLink>
                        </Box>

                        {false ?
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            :
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: "center", gap: 1 }}>
                                <Link to='/login'><Button sx={{ typography: { xs: 'body', md: 'body' } }} size="small" color="secondary" variant="contained"> Login</Button></Link>
                                <p style={{ color: '#727c82' }}>or</p>
                                <Link to='/signup'><Button sx={{ typography: { xs: 'body', md: 'body' } }} size="small" color="secondary" variant="outlined">Sign up</Button></Link>
                            </Box>
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </div >
    );
};

export default Navbar;