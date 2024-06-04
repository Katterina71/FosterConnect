import React, {useState} from 'react'
import { Box, Container, Typography, FormControlLabel, Button, ListItemButton, ListItemIcon, Checkbox, ListItemText, Grid,  } from '@mui/material'

import UserInfo from '../components/forms/profile_forms/UserInfo'
import FosterInfo from '../components/forms/profile_forms/foster/FosterInfo'
import ShelterInfo from '../components/forms/profile_forms/shelter/ShelterInfo'

import MaterialUISwitch from '../components/forms/profile_forms/MaterialUISwitch'
import AddressForm from '../components/forms/profile_forms/AddressForm'


import { useFormContext } from '../context/FormContext';



export default function CreateProfile() {
    const [checked, setChecked] = useState(false)
    const [typeOfUser, setTypeOfUser] = useState('Foster')

    const { submitForm } = useFormContext();  // Retrieve submitForm from context


    const handleChange = (e) => {
        const newChecked = e.target.checked
        setChecked(newChecked);
        setTypeOfUser(newChecked ? 'Shelter' : 'Foster');
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        submitForm();  // Call the submitForm method from the context
        // Here you can call an API to submit the form data or handle it as needed
        // console.log("Form Submitted", { submitForm });
    };
 
  return (
    <Box sx={{my: '80px'}}>
        <Container>
            <Typography variant='h1' sx={{mb:4}}>Welcome!</Typography>
            <Typography>We're thrilled to have you join us. Whether you're looking to provide a temporary home as a foster or you're a shelter wanting to connect with potential fosters, you're in the right place. This quick registration process is the first step towards making a big difference. Let's get started!</Typography>
            
             {/* Choose Foster or Shelter    */}
            <Box sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' }, my: 4 }}>
                <Typography variant='h2' sx={{mb:4}}>How would you like to join us? As a foster or a shelter?</Typography>
                <Grid container spacing={2} maxWidth="md" sx={{ my: 4 }}>
                    <Grid item xs={6} >
                    <ListItemButton
                    key={1}
                    role="listitem"
                    >
                    <ListItemIcon>
                        <Checkbox
                        checked={checked}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{
                        }}
                        />
                    </ListItemIcon>
                    <ListItemText id='foster' primary={`Foster`} />
                    </ListItemButton>
                </Grid>
                <Grid item xs={6} >
                    <ListItemButton
                    key={2}
                    role="listitem"
                    >
                    <ListItemIcon>
                        <Checkbox
                        checked={checked}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 
                        }}
                        />
                    </ListItemIcon>
                    <ListItemText id='shelter' primary={`Shelter`} />
                    </ListItemButton>
                </Grid>
            </Grid>
        </Box>
            

            <UserInfo />
            <AddressForm />
            <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} />}
                label="Are you registering as a shelter?"
                required
                onChange={handleChange}
            />
        </Container>
        <Container sx={{my:4}}>
             <Typography variant='h3'>Additional Information for {typeOfUser}</Typography>
            {/* Conditionally render FosterInfo or ShelterInfo based on the checked state */}
             {checked ? <ShelterInfo /> : <FosterInfo />}
        </Container>
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button onClick={handleFormSubmit} variant="contained" color='secondary' sx={{my:2}}>CREATE PROFILE</Button>
        </Container>
    </Box>
  )
}
