import { useEffect, useState } from "react"
import { Box, Container, Typography } from "@mui/material"
import usePetsProfile from '../hooks/usePetsProfile'
import { useLocation } from 'react-router-dom';
import ShelterPetsProfilesGallery from "../components/gallery/ShelterPetsProfilesGallery";


export default function ShelterPets() {

  const [petArray, setPetArray] = useState([])
  const { getPetsProfilesShelter } = usePetsProfile();

  const location = useLocation();
  const shelter = location.state?.shelter || {};
  console.log(shelter)

  const fetchPets = async () => {
    const data = await getPetsProfilesShelter(shelter);
    console.log('pet')
    console.log(data)
    if (data.length === '0') { setPetArray([]);}
    else setPetArray(data);

};
  
    useEffect(() => {
      fetchPets();
  }, []); // Initial fetch 

  return (
    <Box sx={{my:4}}>
        <Container>
            <Typography variant="h1">Welcome to {shelter.shelter_name || ''}</Typography>
            <Typography variant="h2" sx={{mt:2}}>All Pet are looking for temporarily home</Typography>
            { petArray.length === 0  ? <Typography paragraph sx={{mt:4}}>No Pets Profiles Found</Typography> : <ShelterPetsProfilesGallery pets={petArray} />}
            <Box sx={{my:4}}>
                <Typography variant="h2" sx={{mb:3}}>Get more information, connect with Shelter</Typography>
                <Typography variant='h6'>{`Phone: ${shelter.phone}`}</Typography>
                <Typography variant='h6'>{`Phone: ${shelter.email}`}</Typography>
                <Typography variant='h6'>{`Address: ${shelter.address[0].street_address}`}</Typography>
                <Typography variant='h6'>{`Address: ${shelter.address[0].town}`}</Typography>
            </Box>
        </Container>
    </Box>
  )
}
