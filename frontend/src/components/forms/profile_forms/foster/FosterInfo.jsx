// import React, { useState } from 'react';
import {  useState } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import PetPreferences from '../foster/PetPreferences'; // Assuming this is the correct import path
import { useFormContext } from '../../../../context/FormContext';

const FosterInfo = () => {
    const [petPreferences, setPetPreferences] = useState([]);
    const { updateFormData } = useFormContext();

    const handleAddPetPreference = () => {
        setPetPreferences([...petPreferences, { pet_type: '', life_stage: '', size: '' }]);
    };

    const handleRemovePetPreference = (index) => {
        setPetPreferences(petPreferences.filter((_, i) => i !== index));
    };

    const updatePreference = (index, updatedPreference) => {
        const updatedPreferences = [...petPreferences];
        updatedPreferences[index] = updatedPreference;
        setPetPreferences(updatedPreferences);
    };

    const handleSubmit = () => {
        console.log(petPreferences)
        updateFormData('fostering_preferences', petPreferences);  // This would push all preferences to context
    };

    return (
        <Box sx={{ my: 4 }}>
            <Container>
                <Typography>Add your pet preferences below:</Typography>
                {petPreferences.map((preference, index) => (
                    <Box key={index}>
                        <PetPreferences preference={preference} index={index} updatePreference={updatePreference} />
                        <Button onClick={() => handleRemovePetPreference(index)} variant="contained" color="error" sx={{ mt: 1 }}>
                            Remove
                        </Button>
                    </Box>
                ))}
                <Button onClick={handleAddPetPreference} variant="contained" color="secondary" sx={{ my: 2 }}>
                    Add New Pet Preference
                </Button>
                <Button onClick={handleSubmit} variant="contained" color="warning" sx={{ my: 2, ml:4}}>
                    Submit All Preferences
                </Button>
            </Container>
        </Box>
    );
};

export default FosterInfo;
