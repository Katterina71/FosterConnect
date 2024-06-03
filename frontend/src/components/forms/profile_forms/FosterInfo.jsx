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

    return (
        <Box>
            <Container>
                <Typography>Add your pet preferences below:</Typography>
                {petPreferences.map((preference, index) => (
                    <Box key={index}>
                        <PetPreferences preference={preference} />
                    </Box>
                ))}
                <Button onClick={handleAddPetPreference} variant="contained">Add Another Pet Preference</Button>
            </Container>
        </Box>
    );
}
