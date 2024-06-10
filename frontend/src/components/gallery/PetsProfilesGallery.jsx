import {useState, useEffect} from 'react'
import {Box,Container, Typography, Grid, Button, CardMedia, Card} from '@mui/material'
import usePetsProfile from '../../hooks/usePetsProfile'



export default function PetsProfilesGallery() {
  const [petArray, setPetArray] = useState([])
  const {getPetsProfiles, removePetProfile} = usePetsProfile()



  useEffect( () =>{
    const fetchPets = async () => {
      const data = await getPetsProfiles(); 
      setPetArray(data);  
  };
  fetchPets();
}, []); 

const handleRemovePet = async (petId) => {
  try {
      await removePetProfile(petId);
      // Filter out the removed pet and update state
      setPetArray(currentPets => currentPets.filter(pet => pet._id !== petId));
  } catch (error) {
      console.error('Error removing pet:', error);
      // Optionally show an error message to the user here
  }
};


  return (
   <Box>
    <Container>
      <Typography variant='h2'>All pets profiles</Typography>
      <Grid container spacing={2} sx={{mt:4}}>
      {petArray.map((pet, index) => (
           <Grid item xs={4} key={index}>
                    <Card>
                        <CardMedia sx={{ height: 180 }}
                             image={pet.img}
                             title={`${pet.type} ${pet.name}`}  />
                        <Box sx={{p:2}}>   
                        <Typography variant='h6'>{`Name: ${pet.name}`}</Typography>
                        <Typography variant='body1'>{`Type: ${pet.type}, Age: ${pet.age_month}`}</Typography>
                        <Typography variant='body1'>{`Size: ${pet.size}, Gender: ${pet.gender}`}</Typography>
                        <Button variant="contained" color="error" sx={{mt:3}} onClick={() => handleRemovePet(pet._id)}>Remove</Button>
                        </Box>  
                    </Card>
              </Grid>
            ))}
       </Grid>    
    </Container>
   </Box>
  )
}
