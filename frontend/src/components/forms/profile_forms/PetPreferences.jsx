import React, { useState } from 'react';
import { Box, Container, Grid, TextField, MenuItem, Typography } from '@mui/material';

const PetPreferences = () => {
    const [petType, setPetType] = useState('');
    const [lifeStage, setLifeStage] = useState('');
    const [size, setSize] = useState('');

    // Options for pet type, life stage, and size
    const petTypes = ['Dog', 'Cat', 'Bird', 'Other'];
    const lifeStages = ['Puppy/Kitten', 'Juvenile', 'Adult', 'Senior'];
    const sizes = ['Small', 'Medium', 'Large', 'Extra Large'];

    return (
        <Box         
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 2, width: '25ch' },
                my:4
            }}
            noValidate
            autoComplete="off">
                <Typography variant="h4" gutterBottom>
                    Pet Preferences
                </Typography>
                <Container maxWidth="md" sx={{my:4}}>
                        <TextField
                            select
                            label="Pet Type"
                            value={petType}
                            onChange={e => setPetType(e.target.value)}
                            variant="outlined"
                        >
                            {petTypes.map((type) => (
                                <MenuItem key={type} value={type}>
                                    {type}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            select
                            label="Life Stage"
                            value={lifeStage}
                            onChange={e => setLifeStage(e.target.value)}
                            variant="outlined"
                        >
                            {lifeStages.map((stage) => (
                                <MenuItem key={stage} value={stage}>
                                    {stage}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            select
                            label="Size"
                            value={size}
                            onChange={e => setSize(e.target.value)}
                            variant="outlined"
                        >
                            {sizes.map((size) => (
                                <MenuItem key={size} value={size}>
                                    {size}
                                </MenuItem>
                            ))}
                        </TextField>
            </Container>
        </Box>
    );
};

export default PetPreferences;