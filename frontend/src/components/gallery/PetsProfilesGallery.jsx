import {useState, useEffect} from 'react'
import {Box,Container, Typography, Paper, Grid, Button, CardMedia, Card} from '@mui/material'
import usePetsProfile from '../../hooks/usePetsProfile'



export default function PetsProfilesGallery() {
  const [petArray, setPetArray] = useState([])
  const {getPetsProfiles} = usePetsProfile()



  useEffect( () =>{
    const fetchPets = async () => {
      const data = await getPetsProfiles(); 
      setPetArray(data);  
  };

  fetchPets();
}, []); 


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
                        <Button variant="contained" color="error" sx={{mt:3}}>Remove</Button>
                        </Box>  
                    </Card>
              </Grid>
            ))}
       </Grid>    
    </Container>
   </Box>
  )
}
