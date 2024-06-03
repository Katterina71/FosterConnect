import React, {useState} from 'react'
import { Box, Container, Typography, FormControlLabel } from '@mui/material'

import UserInfo from '../components/forms/profile_forms/UserInfo'
import FosterInfo from '../components/forms/profile_forms/FosterInfo'
import ShelterInfo from '../components/forms/profile_forms/ShelterInfo'

import MaterialUISwitch from '../components/forms/profile_forms/MaterialUISwitch'



export default function CreateProfile() {
    const [checked, setChecked] = useState()

    const handleChange = (e) => {
        setChecked(e.target.checked);
    }
 
  return (
    <Box>
        <Container>
            <Typography variant='h1'>Welcome!</Typography>
            <Typography>We're thrilled to have you join us. Whether you're looking to provide a temporary home as a foster or you're a shelter wanting to connect with potential fosters, you're in the right place. This quick registration process is the first step towards making a big difference. Let's get started!</Typography>
            <FormControlLabel
           control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
           label="Are you registering as a shelter?"
           required
           checked={checked}
           onChange={handleChange}
            />
            {/* Conditionally render FosterInfo or ShelterInfo based on the checked state */}
             {checked ? <ShelterInfo /> : <FosterInfo />}

            <ShelterInfo />
        </Container>
    </Box>
  )
}
