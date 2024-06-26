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
import { Logout } from '@mui/icons-material';

import {useAuth} from '../../context/AuthContext'
import {Link, useNavigate} from 'react-router-dom'





export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const {currentUser, userData, logout} = useAuth()
  // const {currentUser, userData, logout} = useAuth()

  console.log(userData)

  const pages = [ {name:'Who is Foster?',
                  link: '/who-is-foster'},
                  {name:'About Fosters Connect',
                  link: '/about'},
                  {name:'Pets Finder',
                  link:'/finder'}];


  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
           <Box  component="img"  src='./logo-h.svg'  alt='logo'
            sx={{  width: 200,  height: 'auto',  display: { xs: 'none', md: 'flex' },
              marginLeft: 'auto', // Center on large screens
              marginRight: 'auto',
              cursor: 'pointer' // Changes cursor on hover to indicate interactivity
            }}
            onClick = {handleClickLogo}  />
        </Box>

          {/* Mobile menu */}
           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton  size="large"  aria-label="menu"  aria-controls="menu-appbar"  aria-haspopup="true"  onClick={handleOpenNavMenu}  color="inherit"  >
            <MenuIcon sx={{   display: { xs: 'block', md: 'none' },  color: 'grey',  width: '20'  }} />
            </IconButton>
            <Menu  id="menu-appbar"  anchorEl={anchorElNav} anchorOrigin={{  vertical: 'bottom', horizontal: 'left',   }}  keepMounted
              transformOrigin={{  vertical: 'top',  horizontal: 'left',  }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{  display: { xs: 'block', md: 'none' },  }}
            >
            {/* Array of pages */}
              {pages.map((page,index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={()=> {navigate(page.link)}}>{page.name}</Typography>
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

          {/* Menu buttons and links*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button key={index} onClick={()=> {navigate(page.link)}}  sx={{ my: 2, mx:'auto', color: '#220C04', display: 'block'}} >
                {page.name}
              </Button>
            ))}
          </Box>
            
          {/* User Authentication Button */}
          <Box sx={{ flexGrow: 0 }}>
            {currentUser ? (
              <>
                <Link  sx={{ flexGrow: 1,  fontSize: '1rem', fortWeight: '500',  color: 'black', alignItems: 'center', display: { xs: 'none', md: 'flex' } }}
                 aria-controls={open ? 'demo-positioned-menu' : undefined}
                 aria-haspopup="true"
                 aria-expanded={open ? 'true' : undefined}
                 onClick={handleClick}>

                {/* Hi, {currentUser.email || 'user'}!  Displaying user's name if logged in */}
                Hi,  {'Welcome Back'}!  {/* Displaying user's name if logged in */}
                </Link>
                <Menu id="demo-positioned-menu" aria-labelledby="demo-positioned-button" anchorEl={anchorEl} open={open} onClose={handleClose}
                 anchorOrigin={{ vertical: 'top',  horizontal: 'left', }} transformOrigin={{
                 vertical: 'top',
                 horizontal: 'left',
                 }} 
                 sx={{mt:4}}>
               <MenuItem  onClick={() => navigate('/dashboard')}>My Profile</MenuItem>
               <MenuItem onClick={handleLogout} startIcon={<Logout />} >Logout</MenuItem>
              </Menu>
    
              </>
            ) : (
              <Box>
              <Button variant="contained" color="secondary" sx={{ mt: 1, mb: 2, height: '45px', color: '#ffffff' }}
               aria-controls={open ? 'demo-positioned-menu' : undefined}
               aria-haspopup="true"
               aria-expanded={open ? 'true' : undefined}
               onClick={handleClick}>  Sign Up</Button>

               <Menu id="demo-positioned-menu" aria-labelledby="demo-positioned-button" anchorEl={anchorEl} open={open} onClose={handleClose}
               anchorOrigin={{ vertical: 'top',  horizontal: 'left', }} transformOrigin={{
                vertical: 'top',
                 horizontal: 'left',
                 }} 
                 sx={{mt:4}}>
               <MenuItem  onClick={() => navigate('/signup')}>Create Account</MenuItem>
               <MenuItem onClick={() => navigate('/login')}>Login</MenuItem>
              </Menu>
      </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

