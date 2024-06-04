// import React from 'react';
import { Box, Container, Typography, TextField } from '@mui/material';
import { useFormContext } from '../../../../context/FormContext';

export default function FosterInfo() {

    const { updateFormData } = useFormContext();

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      updateFormData('userInfo', { [name]: value });
  };

    return (

        <Box sx={{my:4}}>     
        <Typography>Add your shelter name:</Typography>    
        <Container maxWidth="md" sx={{my:4}}>
            
                <TextField
                required
                id="name-input"
                label="Shelter Name"
                name="shelter_name"  
                onChange={handleInputChange}
                autoFocus
                />
            </Container>
 </Box>


    );
}
