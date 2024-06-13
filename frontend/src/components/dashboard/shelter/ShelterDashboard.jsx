

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
    const [addPet, setAddPet] = useState(false);
    const [render, setRender] = useState(true);

    const fetchPets = async () => {
      try {
        const data = await getPetsProfiles();
        setPetArray(data);
        console.log('Pets Data')
        console.log(data)
      } catch (error) {
        console.log(error)
      }

  };
    
      useEffect(() => {
        setAddPet(false)
        fetchPets();
        setRender(true);
    }, [addPet]); // Initial fetch


    useEffect(()=> {
      console.log('petArray has been updated:', petArray);
    },[petArray])

    const handlePetAdded = () => {
      setAddPet(!addPet); // Toggle addPet to trigger fetchPets
      setNewPet(false); // Close the Add Pet Form
      setRender(false);
  };

  console.log(petArray)

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
          { render && <Box sx={{mt:4}}>
              <PetsProfilesGallery pets={petArray}/>
           </Box>}
       </Container>
       </Box>
     </Box>
  )
}


