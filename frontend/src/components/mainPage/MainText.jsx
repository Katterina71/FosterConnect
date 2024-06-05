
import { Typography, Container } from '@mui/material'
import { useTheme } from '@mui/material/styles';

const containerStyle = {
    marginTop: '20px',
    marginBottom: '20px', // Adjust the value to match the height of the footer
  };

  
export default function MainText() {

  const theme = useTheme(); // This hook gives you access to the theme

  return (
    <Container sx={containerStyle}>
        <Typography variant="h1" sx={{ color: theme.palette.secondary.dark }}>Fosters Connect:</Typography>
        <Typography variant="h1">Bridge Homes, Touch Hearts</Typography>
         <Typography sx={{mt:'20px', mb:'10px'}}>Welcome to Fosters Connect, where every match sparks new hope! This platform is dedicated to shelters seeking compassionate fosters and to individuals who are eager to open their homes to pets in need. With our targeted email alerts, shelters can directly reach potential fosters with details of pets urgently requiring care.</Typography>
         <Typography>Together, we’re not just fostering pets; we’re saving lives and strengthening the bond between communities and shelters. Start your fostering journey with us today—become a foster and see the joy a temporary companion brings into your life. Or register your shelter with us and let us help you find the perfect temporary homes for your cherished residents. Together, let&&apos;s connect hearts and paws with purpose!</Typography>
    </Container>
   
  )
}
