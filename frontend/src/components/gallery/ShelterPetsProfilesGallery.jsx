import {useState, useEffect} from 'react'
import {Box,Container, Typography, Grid, CardMedia, Card} from '@mui/material'
import usePetsProfile from '../../hooks/usePetsProfile'



export default function ShelterPetsProfilesGallery({ pets }) {
  const [petArray, setPetArray] = useState([])


  useEffect( () =>{
    setPetArray(pets)
}, []); 


  return (
   <Box sx={{mt:4}}>
    <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 12 }} sx={{mt:4}}>
      {petArray.map((pet, index) => (
           <Grid item xs={4} key={index}>
                    <Card>
                        <CardMedia sx={{ height: 180 }} image={pet.img}  title={`${pet.type} ${pet.name}`}  />
                        <Box sx={{p:2}}>   
                        <Typography variant='h6'>{`Name: ${pet.name}`}</Typography>
                        <Typography variant='body1'>{`Type: ${pet.type}, Age month: ${pet.age_month}`}</Typography>
                        <Typography variant='body1'>{`Size: ${pet.size}, Gender: ${pet.gender}`}</Typography>
                        </Box>  
                    </Card>
              </Grid>
            ))}
       </Grid>    
    </Container>
   </Box>
  )
}
