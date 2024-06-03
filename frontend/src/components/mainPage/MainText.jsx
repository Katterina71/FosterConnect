import React from 'react'
import { Typography, Container } from '@mui/material'

const containerStyle = {
    marginTop: '20px',
    marginBottom: '100px', // Adjust the value to match the height of the footer
  };

  
export default function MainText() {
  return (
    <Container sx={containerStyle}>
        <Typography variant="h1">Fosters Connect: Bridge Homes, Touch Hearts</Typography>
         <Typography sx={{mt:'20px', mb:'20px'}}>Welcome to Foster Connections, where every match sparks new hope! This platform is dedicated to shelters seeking compassionate fosters and to individuals who are eager to open their homes to pets in need. With our targeted email alerts, shelters can directly reach potential fosters with details of pets urgently requiring care.</Typography>
         <Typography>Together, we’re not just fostering pets; we’re saving lives and strengthening the bond between communities and shelters. Start your fostering journey with us today—become a foster and see the joy a temporary companion brings into your life. Or register your shelter with us and let us help you find the perfect temporary homes for your cherished residents. Together, let's connect hearts and paws with purpose!</Typography>
    </Container>
   
  )
}
