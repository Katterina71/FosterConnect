import {useEffect, useReducer, useState} from 'react'

import {Box,Container, Button, Typography, Grid, CardMedia, Card, Select, MenuItem, FormControl, InputLabel, CircularProgress} from '@mui/material'
import usePetsProfile from '../../hooks/usePetsProfile'

const initialState = {
    pets: [],
    filteredPets: [],
    filters: {
        type: '',
        town: '',
        animalType: '',
    }
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_PETS':
            return {
                ...state,
                pets: action.payload,
                filteredPets: action.payload // Initially no filters, so show all
            };
        case 'SET_FILTERS':
            return {
                ...state,
                filters: { ...state.filters, ...action.payload }
            };
        case 'APPLY_FILTERS': {
            const { type, town } = state.filters;
            let filtered = state.pets.filter(pet => {
                return (!type || pet.type === type) && (!town || pet.town === town);
            });
            return {
                ...state,
                filteredPets: filtered
            };
        }
        case 'RESET_FILTERS':
            return {
              ...state,
              filters: {
                type: '',
                town: '',
                animalType: '',
              },
              filteredPets: state.pets // Reset to show all pets
            };

        case 'SORT_PETS':
            {let sortedPets = state.filteredPets.slice(); // Use slice to copy the array
            sortedPets.sort((a, b) => {
                if (action.payload === 'name') {
                    return (a.name || "").localeCompare(b.name || "");
                } else if (action.payload === 'age') {
                    return (parseInt(a.age_month) || 0) - (parseInt(b.age_month) || 0);
                } else if (action.payload === 'size') {
                    return (a.size || "").localeCompare(b.size || "");
                }
                return 0;
            })
            return {
                ...state,
                filteredPets: sortedPets
            }}
        default:
            return state;
    }
}


export default function Pets() {

const [state, dispatch] = useReducer(reducer, initialState);
const {getAllPetsProfiles} = usePetsProfile();
const [loading, setLoading] = useState(true)

useEffect(()=>{
    const fetchData = async() =>{
        try {
            const data = await getAllPetsProfiles()
            dispatch({ type: 'SET_PETS', payload: data });
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
  };
  fetchData()
 },[])


 const handleSortChange = (event) => {
    dispatch({ type: 'SORT_PETS', payload: event.target.value });
};

const handleFilterChange = (event) => {
    dispatch({ type: 'SET_FILTERS', payload: { [event.target.name]: event.target.value } });
    dispatch({ type: 'APPLY_FILTERS' });
};

const handleResetFilters = () => {
    dispatch({ type: 'RESET_FILTERS' });
  };

  return (
        <Box sx={{my:6}}>
            <Container>
            <Typography variant='h2'>All Pets Profiles</Typography>
            <Box sx={{mt:6}}>
            <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, md: 12 }} alignItems="center" justifyContent='flex-center' sx={{mb:6}}>
                <Grid  xs={4} sx={{}} >
                <FormControl fullWidth>
                            <InputLabel>Type</InputLabel>
                            <Select value={state.filters.animalType}  onChange={handleFilterChange}    name="type"    label="Type" >
                                <MenuItem><em>Filters</em></MenuItem>
                                <MenuItem value="Dog">Dog</MenuItem>
                                <MenuItem value="Cat">Cat</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                </FormControl>
                </Grid>
                <Grid xs={4} sx={{ ml: { xs: 0, md: 4 }, mt: {xs: 2, md: 0}} } >
                    <Select value={''} displayEmpty  onChange={handleSortChange} inputProps={{ 'aria-label': 'Without label' }}>
                            <MenuItem value=""> <em>Sorting</em></MenuItem>
                            <MenuItem value="name">Sort by Name</MenuItem>
                            <MenuItem value="age">Sort by Age</MenuItem>
                            <MenuItem value="size">Sort by Size</MenuItem>
                    </Select>
                </Grid>
                <Grid sx={{ ml: { xs: 0, md: 4 }} }>
                <Button variant="contained" color="secondary" onClick={handleResetFilters} sx={{ mt: 2 }}>
                  Reset Filters
                 </Button>
                </Grid>
            </Grid>
            </Box>
            
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 12 }} sx={{mt:4}}>
            {loading && (  <CircularProgress  size={24}  color="secondary"/>  )}
            {state.filteredPets.map((pet, index) => (
                <Grid item xs={4} key={index}>
                            <Card>
                                <CardMedia sx={{ height: 180 }}    image={pet.img}    title={`${pet.type} ${pet.name}`}  />
                                <Box sx={{p:2}}>   
                                <Typography variant='h6'>{`Name: ${pet.name}`}</Typography>
                                <Typography variant='body1'>{`Type: ${pet.type}, Age (month): ${pet.age_month}`}</Typography>
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
