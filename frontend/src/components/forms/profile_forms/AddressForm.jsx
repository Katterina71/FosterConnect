import React from 'react'
import { Box, Container, Grid, TextField, Typography } from '@mui/material'

export default function AddressForm() {
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
            <TextField required id="outlined-required" label="Street Address" />

             <TextField required id="outlined-required" label="Town"  />
    
            <TextField required id="outlined-required" label="County" />

            <TextField required id="outlined-required" label="Postal Code"/>

            <TextField required id="outlined-required" label="State" />

    </Container>
</Box>
  )
}
