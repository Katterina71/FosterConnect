// import React from 'react'
import { Box, Container, TextField, Typography } from '@mui/material'

//To apply the phone mask:
import InputMask from 'react-input-mask';

import { useFormContext } from '../../../context/FormContext';

export default function UserInfo() {

  const { updateFormData } = useFormContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData('userInfo', { [name]: value });
};

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
           id="name-input"
           label="Your Name"
           name="name"  
           onChange={handleInputChange}
           autoFocus
        />
        <InputMask mask="(999) 999-9999" maskChar=" " onChange={handleInputChange}>
          {() => (
          <TextField
            required
            id="outlined-required"
            label="Your Phone"
            variant="outlined"
            name="phone" 
        />
         )}
         </InputMask>
    </Container>
</Box>
  )
}
