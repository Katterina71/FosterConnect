

import React, { useState } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import AddressForm from './AddressForm';

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


    return (

        <Box>
        <Container>
            <Typography>Add another shelter address:</Typography>
            {shelterAddress.map((address, index) => (
                <Box key={index}>
                    <AddressForm address={address} />
                </Box>
            ))}
            <Button onClick={handleAddAddress} variant="contained">Add Another Address</Button>
        </Container>
    </Box>


    );
}
