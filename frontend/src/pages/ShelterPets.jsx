import { useEffect, useState } from "react"
import { Box, Container, Typography } from "@mui/material"
import PetsProfilesGallery from "../components/gallery/PetsProfilesGallery"
import usePetsProfile from '../hooks/usePetsProfile'
import { useLocation } from 'react-router-dom';


export default function ShelterPets() {

  const [petArray, setPetArray] = useState([])
  const { getPetsProfiles } = usePetsProfile();

  const location = useLocation();
  const shelter = location.state?.shelter || {};

  const fetchPets = async () => {
    const data = await getPetsProfiles();
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
            { (petArray.length === 0 ) ? <Typography paragraph sx={{mt:4}}>No Pets Profiles Found</Typography> : <PetsProfilesGallery pets={petArray} />}
            
        </Container>
    </Box>
  )
}
