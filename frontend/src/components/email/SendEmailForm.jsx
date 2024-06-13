import { MailOutline } from "@mui/icons-material";
import { Box, Button, Container } from "@mui/material";

const SendPetListButton = () => {
  const handleSendPetList = async () => {
    try {
      const response = await fetch('/api/email/send-pet-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        alert('Emails sent successfully');
      } else {
        alert('Error sending emails');
      }
    } catch (error) {
      console.error('Error sending emails', error);
      alert('Error sending emails');
    }
  };

  return (
    <Box sx={{my:4}}>
        <Container  sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained"  sx={{ my: 4, bgcolor: 'secondary.light'}} onClick={handleSendPetList} startIcon={<MailOutline /> }>Send Pet List to Fosters</Button>
        </Container>
    </Box>
  );
};

export default SendPetListButton;
