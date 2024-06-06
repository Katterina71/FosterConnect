

import {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import ShelterDashboard from '../components/dashboard/shelter/ShelterDashboard';
import FosterDashboard from '../components/dashboard/foster/FosterDashboard';

import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'


  export default function Dashboard() {

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
         {user.shelter ? <ShelterDashboard user={user}/> : <FosterDashboard user={user}/>}
        <Container  sx = {{
           display: 'flex',
           justifyContent: 'center'
           }}>
                <Box style={{
                        width: '500px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
            }}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', gap:'16px'}}>
                <Link to="/update-profile">Update Profile</Link>
                <Link to="/change-password">Change Password</Link>
                <Link to="/update-profile" color='warning'>Remove Profile</Link>
            </Box>

            <Button onClick = {handleLogout} color='secondary' variant="contained" sx={{ mt: 8, mb: 4}}>Logout</Button>
        </Box>
        </Container>
    </Box>
  )
}


