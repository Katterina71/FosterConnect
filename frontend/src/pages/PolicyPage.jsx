import { Box, Container, Typography } from "@mui/material";


export default function PolicyPage() {
  return (
    <Box sx={{my:4}}>
        <Container>
        <Typography variant="h1">Policy Page</Typography>
        <Typography paragraph sx={{my:3}}>Welcome to Fosters Connect. This platform is designed to facilitate connections between animal shelters and potential fosters, ensuring that pets find the temporary homes they need. As part of our commitment to transparency and integrity, we have established the following policies to guide our interactions and operations.</Typography>
        <Typography variant="h2">Purpose</Typography>
        <Typography paragraph sx={{my:3}}>Fosters Connect is a project developed with the primary goal of enhancing foster care coordination for animal shelters and foster caregivers. Additionally, this project serves as a learning platform for developers to gain hands-on experience with modern web technologies and services.</Typography>
        <Typography variant="h2">Data Privacy</Typography>
        <Typography paragraph sx={{my:3}}>We are committed to protecting the privacy of our users. All personal information collected on Fosters Connect, including names, addresses, and contact details, is used solely for the purpose of facilitating foster care coordination. We do not sell or share your personal information with third parties without your explicit consent.</Typography>
        <Typography variant="h2">User Responsibilities</Typography>
        <Typography paragraph sx={{my:3}}><span style={{fontWeight:500}}>Accurate Information: </span>Users are responsible for providing accurate and up-to-date information during registration and profile creation.
                              <span style={{fontWeight:500}}>Respectful Communication: </span> All communications on the platform should be respectful and courteous. Any form of harassment or abuse will not be tolerated and may result in account suspension or termination.
                              <span style={{fontWeight:500}}>Compliance with Laws: </span> Users must comply with all applicable laws and regulations while using the platform.</Typography>

        <Typography variant="h2">Learning Goals</Typography>
        <Typography paragraph sx={{my:3}}><span style={{fontWeight:500}}>MERN Stack Mastery: </span>Developing a robust and scalable application using MongoDB, Express.js, React, and Node.js.
        <span style={{fontWeight:500}}>UI/UX Enhancement with MUI: </span>Creating a visually appealing and user-friendly interface using Material-UI (MUI).
        <span style={{fontWeight:500}}>Secure Authentication with Firebase: </span>Implementing secure and reliable user login and registration processes with Firebase Authentication.
        <span style={{fontWeight:500}}>Efficient Media Management with Cloudinary: </span>Handling and optimizing media assets such as images and videos using Cloudinary.
        <span style={{fontWeight:500}}>Effective Email Communication with SendGrid: </span>Managing and sending automated emails with SendGrid to enhance communication between shelters and fosters.</Typography>

        <Typography variant="h2">Usage Guidelines</Typography>
        <Typography paragraph sx={{my:3}}>
        <span style={{fontWeight:500}}>Profile Management: </span>Users should regularly update their profiles to ensure all information is current and accurate.
        <span style={{fontWeight:500}}>Pet Listings: </span>Shelters must provide detailed and truthful information about the pets listed for fostering.
        <span style={{fontWeight:500}}>Interaction: </span>All interactions between shelters and foster caregivers should be conducted through the platform’s messaging system to ensure transparency and security.</Typography>

        <Typography variant="h2">Disclaimer</Typography>
        <Typography paragraph sx={{my:3}}>While Fosters Connect strives to provide accurate and helpful information, we do not guarantee the accuracy, completeness, or usefulness of any information on the platform. Users rely on such information at their own risk.</Typography>

        <Typography variant="h2">Changes to Policy</Typography>
        <Typography paragraph sx={{my:3}}>Fosters Connect reserves the right to modify these policies at any time. Users will be notified of significant changes through the platform or via email. Continued use of the platform constitutes acceptance of the revised policies.
        </Typography>

         <Typography sx={{my:4}}>Thank you for being a part of Fosters Connect and for helping us make a difference in the lives of animals in need.</Typography>   
        </Container>
    </Box>
  )
}
