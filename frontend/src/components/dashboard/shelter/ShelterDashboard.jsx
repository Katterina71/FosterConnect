

import {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../../../context/AuthContext'


  export default function ShelterDashboard({user}) {

    const [error, setError] = useState("")
   
    const {currentUser, loginProfile, logout} = useAuth()

    const navigate = useNavigate()




  return (

    <Box>
         <Container sx = {{
      
      display: 'flex',
      justifyContent: 'center'
     }}>
     <CssBaseline />
     <Box
          style={{
            width: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', 
          }}
        >
        <Typography component="h1" variant="h5">
            Shelter Dashboard
        </Typography>
        <Typography component="h1" variant="h5">
            Email: {currentUser.email}
        </Typography>
        <Typography component="h1" variant="h5">
            Name: {user.name || ''}
        </Typography>
        <Typography component="h1" variant="h5">
            Phone: {user.phone || ''}
        </Typography>

       
        </Box>
        </Container>
      </Box>
  )
}


