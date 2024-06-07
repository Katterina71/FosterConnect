

import {useEffect, useState} from 'react'
import {Box, Button, Typography, Container } from '@mui/material';

import HeroImg from '../../mainPage/HeroImg';


import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../../../context/AuthContext'
import AddPetForm from '../../forms/profile_forms/shelter/AddPetForm';


  export default function ShelterDashboard({user}) {
    const [petArray, setPetArray] = useState([])
    const [newPet, setNewPet] = useState(false)

  
    const {currentUser} = useAuth()

   useEffect(()=>{
    setPetArray(user.pets)
   }, [])


  return (

    <Box>
    <HeroImg imgPath={'./dashboard/shelters.jpg'} imgHeight={'450px'}/>
 
    <Box sx={{my: '80px'}}>
       <Container>
           <Typography variant='h1' sx={{mb:4}}>Hi, {user.name || 'Foster'}!</Typography>
           <Typography variant='h2' sx={{mb:4}}>Welcome to Your {user.shelter_name || ''} Shelter Dashboard!</Typography>
           <Typography> Manage your profile and settings seamlessly from here. You have the ability to update your information, create listings for pets available for fostering, and customize your newsletter preferences. If you wish to take a break, you can deactivate your account to temporarily remove your shelter from our finder tool. Utilize your dashboard to maximize your shelter's outreach and engagement.</Typography>
           <Button variant="contained" color="secondary" sx={{ mt: 2 }} onClick={()=>setNewPet(true)}>Add Pet Profile</Button>
           <Box sx={{mt:4}}>
              {newPet && <AddPetForm/>}
           </Box>
       </Container>
       </Box>
     </Box>
  )
}


