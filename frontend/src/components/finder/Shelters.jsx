import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {Box,Container, Typography, Grid, Card, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
import useUserProfile from '../../hooks/useUserProfile';


export default function Shelters() {

const [sheltersArray, setSheltersArray] = useState([]);
const {getAllShelter} = useUserProfile();

const [towns, setTowns] = useState([]);
const [selectedTown, setSelectedTown] = useState('');
const navigate = useNavigate();


useEffect(()=>{
    const fetchData = async() =>{
    const data = await getAllShelter()
    console.log(data)
    setSheltersArray(data)
    // Extract unique towns
    const uniqueTowns = [...new Set(data.map(shelter => shelter.address[0].town))];
    setTowns(uniqueTowns);
  };
  fetchData()
 },[])

 const handleTownFilterChange = (event) => {
    setSelectedTown(event.target.value);
  };

  const handleResetFilters = () => {
    setSelectedTown('');
  };

  const handleNavigateToShelterPets = (shelter) => {
    navigate('/shelter-pets', { state: { shelter } });
  };

  // Filter shelters based on selected town
  const filteredShelters = selectedTown
    ? sheltersArray.filter(shelter => shelter.address[0].town === selectedTown)
    : sheltersArray;



  return (
        <Box sx={{my:6}}>
            <Container>
            <Typography variant='h2'>All Shelters</Typography>

            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <FormControl sx={{ minWidth: 200, mr: 2 }}>
                    <InputLabel>Town</InputLabel>
                    <Select value={selectedTown} onChange={handleTownFilterChange} label="Town">
                    <MenuItem value=""><em>Filters</em></MenuItem>
                    {towns.map((town, index) => (
                        <MenuItem key={index} value={town}>{town}</MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <Button variant="contained" color="secondary" onClick={handleResetFilters}>
                    Reset All
                </Button>
             </Box>

            <Grid container spacing={2} sx={{mt:4}}>
            {filteredShelters.map((shelter, index) => (
                <Grid item xs={12} key={index}>
                            <Card>
                                <Box sx={{p:2}}>   
                                <Typography variant='h6'>{`Name: ${shelter.shelter_name}`}</Typography>
                                <Typography variant='h6'>{`Address: ${shelter.address[0].street_address}`}</Typography>
                                <Typography variant='h6'>{`Address: ${shelter.address[0].town}`}</Typography>
                                <Typography variant='h6'>{`Phone: ${shelter.phone}`}</Typography>
                                <Typography variant='h6'>{`Phone: ${shelter.email}`}</Typography>
                                <Button variant="contained" color='secondary' onClick={() => handleNavigateToShelterPets(shelter)} sx={{mt:2}}>
                                 View Pets
                                </Button>
                                </Box>  
                            </Card>
                    </Grid>
                    ))}
            </Grid>    
            </Container>
        </Box>
  )
}
