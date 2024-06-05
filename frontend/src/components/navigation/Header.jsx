import React from 'react';
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

import {useAuth} from '../../context/AuthContext'
import {Link, useNavigate} from 'react-router-dom'





export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const {currentUser, logout} = useAuth()

  const pages = ['Who is Foster?', 'About App', 'Pets Finder'];
  // const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const navigate = useNavigate()

  const handleClickLogo = () => {
    navigate('/')
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const handleLogout = () => {
    logout();
    // handleCloseUserMenu();
  };

  return (
    <AppBar position="static">
      <Container sx={{maxWidth:"xl"}}>

        <Toolbar disableGutters>

           {/* Responsive Logo Img Positioning - Desktop*/}
        <Box>
           <Box
            component="img"
            src='./logo-h.svg'
            alt='logo'
            sx={{
              width: 200,
              height: 'auto',
              display: { xs: 'none', md: 'flex' },
              marginLeft: 'auto', // Center on large screens
              marginRight: 'auto',
            }}
            onClick = {handleClickLogo}
          />
        </Box>

          {/* Mobile menu */}
           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            <MenuIcon sx={{
                display: { xs: 'block', md: 'none' },
                color: 'grey',
                width: '20'
              }} />

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
            {/* Array of pages */}
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


           {/* Responsive Logo Img Positioning - Mobile*/}
         <Box sx= {{flexGrow: 10, display : { xs: 'flex', md: 'none'}}}>
          <Box component="img" src='./logo-h.svg' alt='logo'
            sx={{
              width: 140,
              height: 'auto',
              display: { xs: 'flex', md: 'none'},
              mx: 'auto',  // Centering logo on mobile
            }}
            onClick = {handleClickLogo}
          />
        </Box>

          {/* Menu buttons */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx:'auto', color: '#220C04', display: 'block'}}
              >
                {page}
              </Button>
            ))}
          </Box>
            
          {/* User Authentication Button */}
          <Box sx={{ flexGrow: 0 }}>
            {currentUser ? (
              <>
                <Typography component="div" sx={{ flexGrow: 1,  color: 'grey', fontSize: '1rem',  alignItems: 'center', display: { xs: 'none', md: 'flex' } }}>
                  Welcome, {currentUser.email}! {/* Displaying user's name if logged in */}
                </Typography>
                <Button onClick={handleLogout} variant="contained" color="secondary" sx={{ mt: 1, mb: 2, height: '45px', color: '#ffffff', ml:2 }}>Logout</Button>
              </>
            ) : (
              <Button onClick={() => navigate('/signup')} variant="contained" color="secondary" sx={{ mt: 1, mb: 2, height: '45px', color: '#ffffff' }}>Sign Up</Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

