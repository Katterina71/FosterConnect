

import React, { useState } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import AddressForm from '../AddressForm';

export default function FosterInfo() {
    // State to hold the array of AddressForm components
    const [shelterAddress, setShelterAddress] = useState([]);

    const handleAddAddress = () => {
        // Add a new address preference object to the array
        setShelterAddress({
            street_address: '',
            town: '',
            county: '',
            postal_code: '',
            state: '',  
        });  
    };

    const handleRemovePetPreference = (index) => {
        // Remove a address object from the array by filtering it out
          setShelterAddress(shelterAddress.filter((_, i) => i !== index));
    }

    const updatePreference = (index, updatedAddress) => {
        const updatedAddresses = [...shelterAddress];
        updatedAddresses[index] = updatedAddress;
        setShelterAddress(updatedAddresses);
    };


    const handleSubmit = () => {
        console.log(shelterAddress)
        updateFormData('shelterAddress', shelterAddress);  // This would push all preferences to context
    };


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
            <Button onClick={handleSubmit} variant="contained" color="warning" sx={{ my: 2 }}>
                    Submit All Addresses
                </Button>
        </Container>
    </Box>


    );
}
