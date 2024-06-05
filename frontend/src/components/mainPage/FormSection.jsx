
import {Box, Typography, Button, Container} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {useTheme} from '@mui/material/styles'




export default function FormSection() {
  const navigate=useNavigate();
  const theme = useTheme()
  
  const handleClick = () => {
  navigate('/signup')
}
  return (
    <Box sx={{my:'40px', py: '40px',  backgroundColor: theme.palette.primary.light }}>
      <Container>
        <Typography variant="h2" sx={{mb: 2}}>Join Our Community of Fosters and Shelters Today!</Typography>
        <Typography>Are you ready to make a difference in the lives of pets waiting for a loving home? Whether you're a shelter looking to connect with dedicated fosters or an individual eager to provide temporary care, Fosters Connect is the place for you. Register now and start your journey of compassion and companionship.</Typography>
        
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ mt: 1, mb: 2 }}>
          <Button onClick={handleClick} variant="contained" color="secondary" sx={{ height: '45px', width: '120px', mt: 4}}>
             Sign Up
          </Button>
         </Box>
      </Container>
    </Box>      
  )
}
