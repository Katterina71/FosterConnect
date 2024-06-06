import {useState, useEffect} from 'react'


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';



import {useAuth} from '../../../context/AuthContext'

import FosterInfo from '../../forms/profile_forms/foster/FosterInfo'

import HeroImg from '../../mainPage/HeroImg';


  export default function FosterDashboard({user}) {

    const [petPreferences, setPetPreferences] = useState(user.fostering_preferences || []);
    const [showAddPreference, setShowAddPreference] = useState(false);

 
    const {currentUser} = useAuth()
 
    console.log(petPreferences)

    useEffect(() => {
      setPetPreferences(user.fostering_preferences || []);
  }, [user.fostering_preferences]);

  const handleRemovePreference = (index) => {
    const newPreferences = [...petPreferences];
    newPreferences.splice(index, 1);
    setPetPreferences(newPreferences);
  
};

const handleAddPreference = () => {
    setShowAddPreference(true)
};

const handleSavePreference = (newPreference) => {
  setPetPreferences(prev => [...prev, newPreference]);
  setShowAddPreference(false);  // Hide the PetPreferences component after saving
};

  return (
    <Box>
     <HeroImg imgPath={'./dashboard/smile-dog.jpg'} imgHeight={'600px'}/>
     <CssBaseline />
     <Box sx={{my: '80px'}}>
        <Container>
            <Typography variant='h1' sx={{mb:4}}>Hi, {user.name || 'Foster'}!</Typography>
            <Typography variant='h2' sx={{mb:4}}>Welcome to Your Foster Dashboard!</Typography>
            <Typography>Here, you can personalize your profile, manage your pet preferences, and adjust your account settings. Feel free to activate or deactivate your account as needed to stop receiving email notifications from our app. </Typography>
        {console.log(user)}
        <Box sx={{my:4}}>
            <Typography >
             Your e-mail address for e-mail distribution : {currentUser.email}
            </Typography>
        </Box>

        <Box>
        <Typography variant="h4" sx={{ mt: 2 }}>Manage Your Pet Preferences:</Typography>

                {petPreferences.map((preference, index) => (
                    <Box key={index} sx={{ my: 4 }}>
                    <Grid container key={index} spacing={2} alignItems="center" sx={{ mb: 2 }}>
                        <Grid item xs={10} sx={{display:'flex', gap:'20px'}}>
                          <Typography>{`Type: ${preference.pet_type}`}</Typography>
                          <Typography>{`Life Stage: ${preference.life_stage}`}</Typography>
                          <Typography>{`Size: ${preference.size}`}</Typography>
                        </Grid>
                    <Grid item xs={2}>
                    <Button variant="contained" color="error" onClick={() => handleRemovePreference(index)} fullWidth>
                        Remove
                    </Button>
                </Grid>
            </Grid>
          </Box>
                ))}
                <Button variant="contained" color="secondary" onClick={handleAddPreference} sx={{ mt: 2 }}>
                    Add New Preference
                </Button>
                {showAddPreference && <FosterInfo/>}
        </Box>
        </Container>
        </Box>
      </Box>
  )
}


