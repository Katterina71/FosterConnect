import {useState} from 'react'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../../../context/AuthContext'
import { ClassNameConfigurator } from '@mui/base';
import HeroImg from '../../mainPage/HeroImg';


  export default function FosterDashboard({user}) {

    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const navigate = useNavigate()

    

  return (
    <Box>
     <HeroImg imgPath={'./dashboard/smile-dog.jpg'} imgHeight={'600px'}/>
     <CssBaseline />
     <Box sx={{my: '80px'}}>
        <Container>
            <Typography variant='h1' sx={{mb:4}}>Hi, {user.name || 'Foster'}!</Typography>
            <Typography variant='h2' sx={{mb:4}}>Welcome to Your Foster Dashboard!</Typography>
            <Typography>Here, you can personalize your profile, manage your pet preferences, and adjust your account settings. Feel free to activate or deactivate your account as needed to stop receiving email notifications from our app. </Typography>
        {console.log(user)}
        <Typography component="h1" variant="h5">
            Email: {currentUser.email}
        </Typography>
        </Container>
        </Box>
      </Box>
  )
}


