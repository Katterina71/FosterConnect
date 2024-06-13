import {useState, useEffect} from 'react'
import { Box, Container, Typography, Button, Grid, CssBaseline } from '@mui/material';

import {useAuth} from '../../../context/AuthContext'
import {useFormContext} from '../../../context/FormContext'

import FosterInfo from '../../forms/profile_forms/foster/FosterInfo'
import HeroImg from '../../mainPage/HeroImg';


  export default function FosterDashboard({user}) {

    const [petPreferences, setPetPreferences] = useState([]);
    const [showAddPreference, setShowAddPreference] = useState(false);
    const {currentUser} = useAuth()
    const {updateFormData, submitForm} = useFormContext()
    
    
 
   
    useEffect(() => {
      if (user && user.fostering_preferences) {
        setPetPreferences(user.fostering_preferences);
      }
    }, [user.fostering_preferences]); // Dependency array includes the state variable
    


  const handleAddPreference = () => {
    setShowAddPreference(true)
};

  
  const handleSaveNewPreference = (newPreference) => {
    console.log("Current Preferences:", petPreferences);
    setPetPreferences(prevPreferences => {
      console.log("Previous Preferences:", prevPreferences);
      return [...prevPreferences, newPreference];
    });
    setShowAddPreference(false); // Hide the form after adding
    
  };


    const handleSaveAllPreferences = () => {
      console.log('save pet:')
      console.log(petPreferences)
      submitForm(); // This function should handle sending data to the server
      setShowAddPreference(false);
     
    };

  return (
    <Box>
     <HeroImg imgPath={'./dashboard/smile-dog.jpg'} imgHeight={'600px'}/>
     <CssBaseline />
     <Box sx={{my: '80px'}}>
        <Container>
            <Box sx={{ display:'flex', justifyContent:'flex-end'}}> 
            {user.active ? <Typography sx={{color:'green', fontSize:'30px', fontWeight:'500'}}>Active</Typography> : <Typography sx={{color:'gray', fontSize:'30px', fontWeight:'500'}}>No Active</Typography>}
            </Box>

            <Typography variant='h1' sx={{mb:4}}>Hi, {user.name || 'Foster'}!</Typography>
            <Typography variant='h2' sx={{mb:4}}>Welcome to Your Foster Dashboard!</Typography>
            <Typography>Here, you can personalize your profile, manage your pet preferences, and adjust your account settings. Feel free to activate or deactivate your account as needed to stop receiving email notifications from our app. </Typography>
            <Box sx={{my:4}}>
              <Typography >
              Your e-mail address for e-mail distribution : <span style={{fontWeight:'800'}}> {currentUser.email} </span>
              </Typography>
            </Box>

            <Box>
                <Typography variant="h4" sx={{ mt: 2 }}>Manage Your Pet Preferences:</Typography>

                <Button variant="contained" color="secondary" onClick={handleAddPreference} sx={{ mt: 2 }}>
                    Update Preference
                </Button>

                {showAddPreference &&                
                <Box>
                  <FosterInfo petArray={petPreferences} onSave={handleSaveNewPreference} />
                  <Button variant="contained" color="secondary" onClick={handleSaveAllPreferences} sx={{ mt: 2 }}>
                      Save All Changes
                  </Button>
                </Box> }

              </Box>


              <Box> 
                {Array.isArray(petPreferences) && petPreferences.map((preference, index) => (
                    <Box key={index} sx={{ my: 4 }}>
                    <Grid container key={index} spacing={2} alignItems="center" sx={{ mb: 2 }}>
                        <Grid item xs={10} sx={{display:'flex', gap:'20px'}}>
                          <Typography>{`Type: ${preference.pet_type}`}</Typography>
                          <Typography>{`Life Stage: ${preference.life_stage}`}</Typography>
                          <Typography>{`Size: ${preference.size}`}</Typography>
                        </Grid>
                   </Grid>
                </Box>
                ))}
              </Box> 
              
      </Container>
     </Box>
    </Box>
  )
}


