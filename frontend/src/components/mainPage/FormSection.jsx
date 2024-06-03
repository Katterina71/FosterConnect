import React from 'react'
import {Box, Typography, Button, Container} from '@mui/material'
import { useNavigate } from 'react-router-dom'



export default function FormSection() {
  const navigate=useNavigate();
  
  const handleClick = () => {
  navigate('/signup')
}
  return (
    <Box sx={{my:'40px'}}>
      <Container>
        <Typography variant="h2">Join Our Community of Fosters and Shelters Today!</Typography>
        <Typography>Are you ready to make a difference in the lives of pets waiting for a loving home? Whether you're a shelter looking to connect with dedicated fosters or an individual eager to provide temporary care, Fosters Connect is the place for you. Register now and start your journey of compassion and companionship.</Typography>
        <Button onClick={handleClick} variant="contained" color="secondary" sx={{ mt: 1, mb: 2, height:'45px', color: '#ffffff' }}>Sign Up</Button>
      </Container>
    </Box>      
  )
}
