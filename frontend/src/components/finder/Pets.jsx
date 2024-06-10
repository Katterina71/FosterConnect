import {useState, useEffect} from 'react'

import {Box,Container, Typography, Grid, CardMedia, Card} from '@mui/material'
import usePetsProfile from '../../hooks/usePetsProfile'


export default function Pets() {

const [petsArray, setPetsArray] = useState([]);
const {getAllPetsProfiles} = usePetsProfile();

useEffect(()=>{
    const fetchData = async() =>{
    const data = await getAllPetsProfiles()
    setPetsArray(data)
  };
  fetchData()
 },[])




  return (
        <Box sx={{my:6}}>
            <Container>
            <Typography variant='h2'>All pets profiles</Typography>
            <Grid container spacing={2} sx={{mt:4}}>
            {petsArray.map((pet, index) => (
                <Grid item xs={4} key={index}>
                            <Card>
                                <CardMedia sx={{ height: 180 }}
                                    image={pet.img}
                                    title={`${pet.type} ${pet.name}`}  />
                                <Box sx={{p:2}}>   
                                <Typography variant='h6'>{`Name: ${pet.name}`}</Typography>
                                <Typography variant='body1'>{`Type: ${pet.type}, Age: ${pet.age_month}`}</Typography>
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
