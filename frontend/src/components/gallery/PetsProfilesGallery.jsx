import {useState, useEffect} from 'react'
import {Box,Container, Typography} from '@mui/material'
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
      {petArray.map((pet, index) => (
                    <Box key={index}>
                        {/* Adjusted to display pet details; ensure properties like pet.name exist */}
                        <Typography variant='h6'>{`Name: ${pet.name}`}</Typography>
                        <Typography variant='body1'>{`Type: ${pet.type}, Age: ${pet.age_month}`}</Typography>
                        <Typography variant='body1'>{`Size: ${pet.size}, Gender: ${pet.gender}`}</Typography>
                    </Box>
            ))}
    </Container>
   </Box>
  )
}
