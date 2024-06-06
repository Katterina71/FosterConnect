// import React, {useState} from 'react'
import  {useState} from 'react'
import { Box, Container, Typography, FormControlLabel, Button } from '@mui/material'

import UserInfo from '../components/forms/profile_forms/UserInfo'

import MaterialUISwitch from '../components/forms/profile_forms/MaterialUISwitch'
import AddressForm from '../components/forms/profile_forms/AddressForm'

import {useNavigate} from 'react-router-dom'

import { useFormContext } from '../context/FormContext';



export default function UpdateProfile() {

    const [checked, setChecked] = useState(true)
    
    const navigate = useNavigate()

    const { submitForm, updateFormData } = useFormContext();  // Retrieve submitForm from context


    const handleChange = (e) => {
        const newChecked = e.target.checked
        setChecked(newChecked);
    }

    const handleFormSubmit = (e) => {
        if (checked) {
            updateFormData('userInfo', {active : true}); 
        } else {
            updateFormData('userInfo', {active : false}); 
        } 
        e.preventDefault();
        submitForm();
        navigate('/dashboard')
    };
 
  return (
    <Box sx={{my: '80px'}}>
        <Container>
            <Typography variant='h1' sx={{mb:4}}>Update profile</Typography>
            <UserInfo />
            <AddressForm />
            <FormControlLabel
                control={<MaterialUISwitch checked={checked} sx={{ m: 1 }} />}
                label={checked ? 'Active' : 'Not Active'} 
                onChange={handleChange}
            />
        </Container>
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button onClick={handleFormSubmit} variant="contained" color='secondary' sx={{my:2}}>Update PROFILE</Button>
        </Container>
    </Box>
  )
}
