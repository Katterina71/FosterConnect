import {useState, useEffect} from 'react'
import {Box,Container, Typography, Grid, Button, CardMedia, Card, CircularProgress} from '@mui/material'
import usePetsProfile from '../../hooks/usePetsProfile'
import {Delete} from '@mui/icons-material';


export default function PetsProfilesGallery({ pets }) {
  const [petArray, setPetArray] = useState([pets])
  const {getPetsProfiles, removePetProfile} = usePetsProfile()
  const [loading, setLoading] = useState(true)


  useEffect( () =>{
    const fetchPets = async () => {
      try {
        const data = await getPetsProfiles();
        setPetArray(data);  
        setLoading(false); 
      } catch (error) {
        setLoading(false); 
        console.log(error)
      }
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
      <Typography variant='h2' sx={{my:4}}>All pets profiles</Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 12 }} sx={{mt:4}}>
      {loading && (  <CircularProgress  size={24}  color="secondary"/>  )}
      {petArray.map((pet, index) => (
           <Grid item xs={4} key={index}>
                    <Card>
                        <CardMedia sx={{ height: 180 }} image={pet.img}  title={`${pet.type} ${pet.name}`}  />
                        <Box sx={{p:2}}>   
                        <Typography variant='h6'>{`Name: ${pet.name}`}</Typography>
                        <Typography variant='body1'>{`Type: ${pet.type}, Age: ${pet.age_month}`}</Typography>
                        <Typography variant='body1'>{`Size: ${pet.size}, Gender: ${pet.gender}`}</Typography>
                        <Button variant="contained" color="error" sx={{mt:3}} startIcon={<Delete />} onClick={() => handleRemovePet(pet._id)}>Remove</Button>
                        </Box>  
                    </Card>
              </Grid>
            ))}
       </Grid>    
    </Container>
   </Box>
  )
}
