// import React from 'react'
import { Box, Container, TextField, Typography } from '@mui/material'

//Collect global variables 
import { useFormContext } from '../../../context/FormContext';

export default function AddressForm() {

  const { updateFormData } = useFormContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData('address', { [name]: value });
};

  return (
    <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 2, width: 'ch' },
            my:4
        }}
        noValidate
        autoComplete="off">

    <Typography variant='h3'>Add your Address</Typography>

    <Container  maxWidth="md" sx={{my:4}}>
            <TextField required id="outlined-required" label="Street Address" name='street_address' onChange={handleInputChange} />

             <TextField required id="outlined-required" label="Town" name='town' onChange={handleInputChange} />
    
            <TextField required id="outlined-required" label="County" name='county' onChange={handleInputChange} />

            <TextField required id="outlined-required" label="Postal Code"name='postal_code' onChange={handleInputChange}/>

            <TextField required id="outlined-required" label="State" name='state' onChange={handleInputChange}/>
    </Container>
</Box>
  )
}
