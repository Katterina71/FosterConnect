

import React, { useState } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import AddressForm from '../AddressForm';

export default function FosterInfo() {
    // State to hold the array of AddressForm components
    const [shelterAddress, setShelterAddress] = useState([]);

    const handleAddAddress = () => {
        // Add a new pet preference object to the array
        const newAddress = {
            street_address: '',
            town: '',
            county: '',
            postal_code: '',
            state: '',  
        };
        setShelterAddress([...shelterAddress, newAddress]);
    };

    const handleRemovePetPreference = (index) => {
        // Remove a address object from the array by filtering it out
          const updatedPreferences = shelterAddress.filter((_, i) => i !== index);
          setShelterAddress(updatedPreferences);
    }

    return (

        <Box sx={{my:4}}>
        <Container>
            <Typography>Add another shelter address:</Typography>
            {shelterAddress.map((address, index) => (
                <Box key={index}>
                    <AddressForm address={address} />
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
            <Button onClick={handleAddAddress} variant="contained" color='secondary' sx={{my:2}}>Add Another Address</Button>
        </Container>
    </Box>


    );
}
