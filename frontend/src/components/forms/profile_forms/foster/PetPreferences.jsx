// import React from 'react';
import { Box, Container, TextField, MenuItem, Typography } from '@mui/material';

const PetPreferences = ({ preference, index, updatePreference }) => {
    const petTypes = ['Dog', 'Cat', 'Other'];
    const lifeStages = ['Puppy/Kitten', 'Adult', 'Senior'];
    const sizes = ['Small', 'Medium', 'Large', 'Extra Large'];

    const handleChange = (field, value) => {
        updatePreference(index, { ...preference, [field]: value });
    };

    return (
        <Box sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' }, my: 4 }} noValidate autoComplete="off">
            <Typography variant="h4" gutterBottom>
                Pet Preferences
            </Typography>
            <Container maxWidth="md" sx={{ my: 4 }}>
                <TextField select label="Pet Type" value={preference.pet_type || ''} onChange={(e) => handleChange('pet_type', e.target.value)} variant="outlined">
                    {petTypes.map(type => (
                        <MenuItem key={type} value={type}>{type}</MenuItem>
                    ))}
                </TextField>
                <TextField select label="Life Stage" value={preference.life_stage || ''} onChange={(e) => handleChange('life_stage', e.target.value)} variant="outlined">
                    {lifeStages.map(stage => (
                        <MenuItem key={stage} value={stage}>{stage}</MenuItem>
                    ))}
                </TextField>
                <TextField select label="Size" value={preference.size || ''} onChange={(e) => handleChange('size', e.target.value)} variant="outlined">
                    {sizes.map(size => (
                        <MenuItem key={size} value={size}>{size}</MenuItem>
                    ))}
                </TextField>
            </Container>
        </Box>
    );
};

export default PetPreferences;
