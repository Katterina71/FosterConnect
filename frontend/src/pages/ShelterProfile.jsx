

import {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'


  export default function ShelterProfile() {

    const [error, setError] = useState("")
    const [user, setUser] = useState("")
    const {currentUser, loginProfile, logout} = useAuth()

    const navigate = useNavigate()

    async function getData(){
      console.log(currentUser)
      try {
       let data = await (loginProfile(currentUser))
       console.log(data)
       setUser(data)
       } catch (error) {
         setError('Data not found')
       }
    }
    
    useEffect(() => {
      getData()
    }, [])

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

        <Link to="/update-profile">Update Profile</Link>
        <Grid  justifyContent="flex-end">
                <Button onClick = {handleLogout} variant="contained" sx={{ mt: 5, mb: 2}}>Log Out</Button>
        </Grid>
        </Box>
        </Container>
      </Box>
  )
}


