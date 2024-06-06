

import {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import HeroImg from '../../mainPage/HeroImg';


import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../../../context/AuthContext'


  export default function ShelterDashboard({user}) {

  
    const {currentUser} = useAuth()






  return (

    <Box>
    <HeroImg imgPath={'./dashboard/shelters.jpg'} imgHeight={'450px'}/>
    <CssBaseline />
    <Box sx={{my: '80px'}}>
       <Container>
           <Typography variant='h1' sx={{mb:4}}>Hi, {user.name || 'Foster'}!</Typography>
           <Typography variant='h2' sx={{mb:4}}>Welcome to Your {user.shelter_name || ''} Shelter Dashboard!</Typography>
           <Typography> Manage your profile and settings seamlessly from here. You have the ability to update your information, create listings for pets available for fostering, and customize your newsletter preferences. If you wish to take a break, you can deactivate your account to temporarily remove your shelter from our finder tool. Utilize your dashboard to maximize your shelter's outreach and engagement.</Typography>
       {console.log(user)}
       <Typography component="h1" variant="h5">
           Email: {currentUser.email}
       </Typography>
       </Container>
       </Box>
     </Box>
  )
}


