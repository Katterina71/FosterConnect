import React, {useState} from 'react'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import PrivateRoute from './forms/PrivateRoute';

const defaultTheme = createTheme({
    palette: {
      primary: { main: '#556cd6' },
      secondary: { main: '#19857b' },
    },
  });

  export default function Dashboard() {

    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const navigate = useNavigate()

    async function handleLogout (){
        setError('')
        try {
           await logout()
           navigate('/login') 
        } catch (error) {
            setError('Failed to logout')
        }
    }

  return (

    <ThemeProvider theme={defaultTheme}>
         <Container component="main" style = {{
      width: '100vh',
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
            Dashboard
        </Typography>
        <Typography component="h1" variant="h5">
            Email: {currentUser.email}
        </Typography>
        <Link to="/update-profile">Update Profile</Link>
        <Grid  justifyContent="flex-end">
                <Button onClick = {handleLogout} variant="contained" sx={{ mt: 5, mb: 2}}>Log Out</Button>
        </Grid>
        </Box>
        </Container>
    </ThemeProvider>
  )
}


