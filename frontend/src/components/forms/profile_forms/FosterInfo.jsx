import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import PetPreferences from '../profile_forms/PetPreferences'; // Assuming you have a PetPreferences component

export default function FosterInfo() {
    const [petPreferences, setPetPreferences] = useState([]);

    const handleAddPetPreference = () => {
        // Add a new pet preference object to the array
        const newPreference = {
            pet_type: '',
            life_stage: '',
            size: ''
        };
        setPetPreferences([...petPreferences, newPreference]);
    };

    const handleRemovePetPreference = (index) => {
        // Remove a pet preference object from the array by filtering it out
        const updatedPreferences = petPreferences.filter((_, i) => i !== index);
        setPetPreferences(updatedPreferences);
    };

    return (
        <Box sx={{my:4}}>
            <Container>
                <Typography>Add your pet preferences below:</Typography>
                {petPreferences.map((preference, index) => (
                    <Box key={index}>
                        <PetPreferences preference={preference} />
                        <Button 
                            onClick={() => handleRemovePetPreference(index)} 
                            variant="contained" 
                            color="error" 
                            sx={{ mt: 1 }}
                        >
                            Remove
                        </Button>
                    </Box>
                ))}
                <Button onClick={handleAddPetPreference} variant="contained"  color="secondary" sx={{my:2}}>Add New Pet Preference</Button>
            </Container>
        </Box>
    );
}
