
import { Box, Container, Typography, Paper, Grid } from "@mui/material"

export default function AboutFosterConnect() {
  return (
  <Box sx={{my:6}}>
    <Container>
        <Typography variant="h1" sx={{mb:4}}>Welcome to Fosters Connect — Bridging Shelters and Fosters for Pet Care</Typography>
        <Typography variant="body" >Welcome to Fosters Connect, a dynamic platform designed to facilitate connections between animal shelters and potential fosters, ensuring that pets find the temporary homes they need. Our service offers a comprehensive approach to foster care coordination, simplifying the process for both shelters and foster caregivers.</Typography>
        
        <Box sx={{my:6}}>
        <Typography variant="h2" sx={{mb:4}}>For Animal Shelters:</Typography>
            <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 2, minHeight:'200px' }}>
                <Typography variant="h6" component="h3">
                Profile Management
                </Typography>
                <Typography variant="body1">
                Create and manage a detailed profile for your shelter. Share your mission, success stories, and specific needs with a community that cares.
                </Typography>
            </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 2, minHeight:'200px' }}>
                <Typography variant="h6" component="h3">
                Pet Listings
                </Typography>
                <Typography variant="body1">
                Easily upload and manage profiles for pets that need fostering. Include detailed descriptions, care requirements, and photos to help potential fosters make informed decisions.
                </Typography>
            </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 2, minHeight:'200px' }}>
                <Typography variant="h6" component="h3">
                Targeted Communications
                </Typography>
                <Typography variant="body1">
                Utilize our platform to send out targeted email blasts to potential fosters based on location and their preference settings. This ensures that your messages reach those most likely to respond and engage.
                </Typography>
            </Paper>
            </Grid>
        </Grid>
       </Box>
     
       <Box sx={{mb:6}}>
        <Typography variant="h2" sx={{mb:4}}>For Fosters:</Typography>
            <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 2, minHeight:'200px' }}>
                <Typography variant="h6" component="h3">
                Personalized Profiles
                </Typography>
                <Typography variant="body1">
                Set up your fostering profile indicating your preferences and the types of pets you can accommodate. This customization helps tailor pet suggestions to match your lifestyle and capabilities.
                </Typography>
            </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 2, minHeight:'200px' }}>
                <Typography variant="h6" component="h3">
                Preference-Based Notifications
                </Typography>
                <Typography variant="body1">
                Receive notifications and email updates about new fostering opportunities that align with your indicated preferences, helping you find the perfect match.
                </Typography>
            </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 2, minHeight:'200px' }}>
                <Typography variant="h6" component="h3">
                Community Support
                </Typography>
                <Typography variant="body1">
                Join a community of like-minded individuals who are also fostering pets. Share experiences, tips, and get support throughout your fostering journey.
                </Typography>
            </Paper>
            </Grid>
        </Grid>
       </Box>
        <Typography variant="body" paragraph>At Fosters Connect, we believe in making a difference in the lives of pets awaiting their forever homes by providing them with a loving temporary home. Our platform is not just about listings and notifications; it&apos;s a tool that brings together communities to support animal welfare collaboratively. Whether you are a shelter looking to expand your reach or a foster ready to open your home to a new friend, Fosters Connect is here to support and streamline every step of the process. </Typography>
       <Typography variant="body" paragraph >Join us today and be part of a compassionate movement dedicated to providing care and comfort to pets in need. Together, we can make a significant impact in the animal welfare community.</Typography>
    </Container>
  </Box>
  )
}
