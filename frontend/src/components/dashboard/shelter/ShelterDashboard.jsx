

import {useEffect, useState} from 'react'
import {Box, Button, Typography, Container } from '@mui/material';

import HeroImg from '../../mainPage/HeroImg';



import AddPetForm from '../../forms/pet_form/AddPetForm';
import PetsProfilesGallery from '../../gallery/PetsProfilesGallery';
import usePetsProfile from '../../../hooks/usePetsProfile'


  export default function ShelterDashboard({user}) {
    const { getPetsProfiles } = usePetsProfile();

    const [newPet, setNewPet] = useState(false)
    const [petArray, setPetArray] = useState([]);

    const fetchPets = async () => {
      const data = await getPetsProfiles();
      setPetArray(data);
  };
    
      useEffect(() => {
        fetchPets();
    }, []); // Initial fetch

    const handlePetAdded = () => {
      fetchPets(); // Re-fetch pets after a new one is added
      setNewPet(false); // Close the Add Pet Form
  };


  return (

    <Box>
    <HeroImg imgPath={'./dashboard/shelters.jpg'} imgHeight={'450px'}/>
 
    <Box sx={{my: '80px'}}>
       <Container>
          <Box sx={{ display:'flex', justifyContent:'flex-end'}}> {user.active ? <Typography sx={{color:'green', fontSize:'30px', fontWeight:'500'}}>Active</Typography> : <Typography sx={{color:'gray', fontSize:'30px', fontWeight:'500'}}>No Active</Typography>}
          </Box>
           <Typography variant='h1' sx={{mb:4}}>Hi, {user.name || 'Foster'}!</Typography>
           <Typography variant='h2' sx={{mb:4}}>Welcome to Your {user.shelter_name || ''} Shelter Dashboard!</Typography>
           <Typography> Manage your profile and settings seamlessly from here. You have the ability to update your information, create listings for pets available for fostering, and customize your newsletter preferences. If you wish to take a break, you can deactivate your account to temporarily remove your shelter from our finder tool. Utilize your dashboard to maximize your shelter's outreach and engagement.</Typography>
           <Button variant="contained" color="secondary" sx={{ mt: 2 }} onClick={()=>setNewPet(true)}>Add Pet Profile</Button>
           <Box sx={{mt:4}}>
             {newPet && <AddPetForm onPetAdded={handlePetAdded} />}
           </Box>
           <Box sx={{mt:4}}>
              <PetsProfilesGallery pets={petArray}/>
           </Box>
       </Container>
       </Box>
     </Box>
  )
}


