// import React, {useState} from 'react'
import  {useState} from 'react'
import { Box, Container, Typography, FormControlLabel, Button, FormControl, RadioGroup, Radio, Alert } from '@mui/material'

import UserInfo from '../components/forms/profile_forms/UserInfo'
import FosterInfo from '../components/forms/profile_forms/foster/FosterInfo'
import ShelterInfo from '../components/forms/profile_forms/shelter/ShelterInfo'

import AddressForm from '../components/forms/profile_forms/AddressForm'

import {useNavigate} from 'react-router-dom'

import { useFormContext } from '../context/FormContext';



export default function CreateProfile() {


    // const [checked, setChecked] = useState(false)
    const [typeOfUser, setTypeOfUser] = useState('')
    const navigate = useNavigate()

    const { submitForm, updateFormData } = useFormContext();  // Retrieve submitForm from context


    const handleChange = (event) => {
       
        const newUserType = event.target.value; 
        console.log(newUserType)
        if (newUserType !== typeOfUser){  // Check if the type has actually changed
            if (newUserType === 'Shelter') {
                updateFormData('petPreferences', []);  // Clear pet preferences when changing to Shelter
                updateFormData('userInfo', {shelter : true}); 
            }
            else { updateFormData('userInfo', {shelter : false}); }
            setTypeOfUser(newUserType);  // Update the user type state
        }
         
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (typeOfUser) {  // Checks if a type of user has been chosen before submitting
            submitForm();
            navigate('/dashboard')
        } else {
            alert('Please select whether you are registering as a foster or a shelter.');  // Alert if no selection is made
        }
        
    };
 
  return (
    <Box sx={{my: '80px'}}>
        <Container>
            <Typography variant='h1' sx={{mb:4}}>Welcome!</Typography>
            <Typography>We&apos;re thrilled to have you join us. Whether you&apos;re looking to provide a temporary home as a foster or you&apos;re a shelter wanting to connect with potential fosters, you&apos;re in the right place. This quick registration process is the first step towards making a big difference. Let&apos;s get started!</Typography>
            {alert && <Alert severity="error" fullWidth>{alert}</Alert>}
            {/* Radio buttons for choosing Foster or Shelter */}
            <FormControl component="fieldset" sx={{ mt: 4, mb: 2 }}>
                    <Typography variant='h2'>How would you like to join us?</Typography>
                    <RadioGroup
                        aria-label="user type"
                        name="user-type"
                        value={typeOfUser}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Foster" control={<Radio />} label="Foster" />
                        <FormControlLabel value="Shelter" control={<Radio />} label="Shelter" />
                    </RadioGroup>
                </FormControl>


            <UserInfo />
            <AddressForm />
        </Container>
        <Container sx={{my:4}}>
             <Typography variant='h3'>Additional Information for {typeOfUser || 'selecting your role'}</Typography>
            {/* Conditionally render FosterInfo or ShelterInfo based on the checked state */}
            {typeOfUser === 'Shelter' ? <ShelterInfo /> : typeOfUser === 'Foster' ? <FosterInfo /> : null}
        </Container>
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button onClick={handleFormSubmit} variant="contained" color='secondary' sx={{my:2}}>CREATE PROFILE</Button>
        </Container>
    </Box>
  )
}
