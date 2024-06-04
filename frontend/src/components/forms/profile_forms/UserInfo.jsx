import React from 'react'
import { Box, Container, Grid, TextField, Typography } from '@mui/material'

export default function UserInfo() {
  return (
  <Box component="form"
  sx={{
    '& .MuiTextField-root': { m: 2, width: 'ch' },
     my:4
  }}
  noValidate
  autoComplete="off" >
    <Typography variant='h3'>Personal Information</Typography>
    <Container maxWidth="md" sx={{my:4}}>
        <TextField
          required
          id="outlined-required"
          label="Your name"
        />
                <TextField
          required
          id="outlined-required"
          label="You Phone"
     
        />
                <TextField
          required
          id="outlined-required"
          label="Subscribe Email"
          defaultValue="Subscribe Email"
        />     
    </Container>
</Box>
  )
}
