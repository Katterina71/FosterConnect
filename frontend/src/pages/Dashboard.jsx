

import {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {Dialog} from '@mui/material'
import {Alert} from '@mui/material'

import ShelterDashboard from '../components/dashboard/shelter/ShelterDashboard';
import FosterDashboard from '../components/dashboard/foster/FosterDashboard';

import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import RemoveProfile from '../components/forms/register_forms/RemoveProfile';


  export default function Dashboard() {

    const [error, setError] = useState("")
    const [user, setUser] = useState("")
    const {currentUser, loginProfile, logout} = useAuth()

    const navigate = useNavigate()

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    async function getData(){ 
      try {
       let data = await (loginProfile(currentUser, navigate))
       return setUser(data)
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
        <Container  sx = {{ display: 'flex', justifyContent: 'center' }}>
            {error && <Alert severity="error" fullWidth>{error}</Alert>}
            <Box style={{ width: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', gap:'16px'}}>
                <Link to="/update-profile">Update Profile</Link>
                <Link to="/change-password">Change Password</Link>
                {/* This button triggers the dialog */}
               <Button color="warning" variant="contained" onClick={handleOpen}>
                    Remove Profile
               </Button>
                <Dialog open={open} onClose={handleClose} color="warning" variant="contained">
                     <RemoveProfile  />
                </Dialog>
            </Box>
            <Button onClick = {handleLogout} color='secondary' variant="contained" sx={{ mt: 8, mb: 4}}>Logout</Button>
        </Box>
        </Container>
    </Box>
  )
}


