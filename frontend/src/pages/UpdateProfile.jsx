// import React, {useState} from 'react'
import  {useState, useEffect} from 'react'
import { Box, Container, Typography, FormControlLabel, Button } from '@mui/material'

import UserInfo from '../components/forms/profile_forms/UserInfo'

import MaterialUISwitch from '../components/forms/profile_forms/MaterialUISwitch'
import AddressForm from '../components/forms/profile_forms/AddressForm'

import {useNavigate} from 'react-router-dom'

import { useFormContext } from '../context/FormContext';
import useUserProfile from '../hooks/useUserProfile'
import { useAuth } from '../context/AuthContext'


export default function UpdateProfile() {

    const [checked, setChecked] = useState()
    const [user, setUser] = useState([])
    const [loading ,setLoading] = useState(false)
    const navigate = useNavigate()
    const { submitForm, updateFormData } = useFormContext();  // Retrieve submitForm from context
    const {getUserInfo} = useUserProfile();
    const  {currentUser} = useAuth();

    useEffect(() => {
        
        async function fetchData() {
            if (currentUser && currentUser.uid) {
                try {
                    const data = await getUserInfo(currentUser.uid);
                    setUser(data);
                    setChecked(data.active)
                    setLoading(true);
                } catch (error) {
                    console.error('Data not found', error);
                }
            } else {
                console.error('No currentUser or currentUser.uid available');
            }
        }
        fetchData();
    }, []);


   
    const handleChange = (e) => {
        const newChecked = e.target.checked
        setChecked(newChecked);
        if (newChecked) {
            updateFormData('userInfo', {active : true}); 
        } else {
            updateFormData('userInfo', {active : false}); 
        } 
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        submitForm();
        navigate('/dashboard')
    };
 
  return (
    <Box sx={{my: '80px'}}>
        <Container>
            <Typography variant='h1' sx={{mb:4}}>Update profile</Typography>
          { loading && <Box><UserInfo user={user}/><AddressForm user={user}/></Box> }
            <FormControlLabel
                control={<MaterialUISwitch checked={checked} sx={{ m: 1 }} />}
                label={checked ? 'Active' : 'Not Active'} 
                onChange={handleChange}
            />
        </Container>
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap:'20px' }}>
            <Button onClick={handleFormSubmit} variant="contained" color='secondary' sx={{my:2}} checked={checked}>Update PROFILE</Button>
            <Button onClick={()=> {navigate('/dashboard')}} variant="contained" color='secondary' sx={{my:2}}>Cancel</Button>
        </Container>
    </Box>
  )
}
