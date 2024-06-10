import {useState, useEffect} from 'react'

import {Box,Container, Typography, Grid, Card} from '@mui/material'
import useUserProfile from '../../hooks/useUserProfile';


export default function Shelters() {

const [sheltersArray, setSheltersArray] = useState([]);
const {getAllShelter} = useUserProfile();

useEffect(()=>{
    const fetchData = async() =>{
    const data = await getAllShelter()
    console.log(data)
    setSheltersArray(data)
  };
  fetchData()
 },[])




  return (
        <Box sx={{my:6}}>
            <Container>
            <Typography variant='h2'>All Shelters</Typography>
            <Grid container spacing={2} sx={{mt:4}}>
            {sheltersArray.map((shelter, index) => (
                <Grid item xs={12} key={index}>
                            <Card>
                                <Box sx={{p:2}}>   
                                <Typography variant='h6'>{`Name: ${shelter.shelter_name}`}</Typography>
                                <Typography variant='h6'>{`Address: ${shelter.address[0].street_address}`}</Typography>
                                <Typography variant='h6'>{`Address: ${shelter.address[0].town}`}</Typography>
                                <Typography variant='h6'>{`Phone: ${shelter.phone}`}</Typography>
                                </Box>  
                            </Card>
                    </Grid>
                    ))}
            </Grid>    
            </Container>
        </Box>
  )
}
