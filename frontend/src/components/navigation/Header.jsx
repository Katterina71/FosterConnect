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

import {Link, useNavigate} from 'react-router-dom'



const pages = ['Who is Foster?', 'About App', 'Pets Finder'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/signup')
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

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container sx={{maxWidth:"100%"}}>

        <Toolbar disableGutters>

           {/* Responsive Logo Img Positioning - Desktop*/}
           <Link to='/'>
           <Box
            component="img"
            src='./logo-h.svg'
            alt='logo'
            sx={{
              width: 200,
              height: 'auto',
              display: { xs: 'none', md: 'flex' },
              marginLeft: { md: 0 }, // Center on xs screens, left on md and up
              marginRight: { md: 0 },
              
            }}
          />
          </Link>
          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex'} }}>

          
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            
            <MenuIcon sx={{
                display: { xs: 'block', md: 'none' },
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
           <Link to='/'>
          <Box
            component="img"
            src='./logo-h.svg'
            alt='logo'
          
            sx={{
              width: 80,
              height: 'auto',
              display: { xs: 'flex', md: 'none'},
              alignContent: 'center',
              flexGrow: { xs: 0.5 }, // Allow it to grow on larger screens if needed
              mr: 1
              
            }}
          />
          </Link>

          {/* Menu buttons */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
            
          

     
          
          {/*Logo */}      
          <Box sx={{ flexGrow: 0 }}>
          
          

            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}

            <Button onClick={handleClick} fullWidth variant="contained" color="secondary" sx={{ mt: 1, mb: 2, height:'45px', color: '#ffffff' }}>Sign Up</Button>

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


        </Toolbar>
      </Container>
    </AppBar>
  );
}

