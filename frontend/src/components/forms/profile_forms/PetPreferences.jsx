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
        <Box>
            <Container>
                <Typography variant="h6" gutterBottom>
                    Pet Preferences
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            select
                            label="Pet Type"
                            fullWidth
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
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            select
                            label="Life Stage"
                            fullWidth
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
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            select
                            label="Size"
                            fullWidth
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
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default PetPreferences;