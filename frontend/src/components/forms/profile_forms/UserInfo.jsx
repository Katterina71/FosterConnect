import {useState} from 'react'
import { Box, Container, TextField, Typography } from '@mui/material'

//To apply the phone mask:
import InputMask from 'react-input-mask';

import { useFormContext } from '../../../context/FormContext';
// import {useAuth} from '../../../context/AuthContext'

export default function UserInfo({user}) {

  const { updateFormData } = useFormContext();
  const [isValid, setIsValid] = useState(true);
  // const {userProfile} = useAuth()

  const validateField = (value) => {
    setIsValid(value.trim() !== "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData('userInfo', { [name]: value });
    validateField(value);
};

  return (
  <Box component="form"
  sx={{
    '& .MuiTextField-root': { m: 2, width: 'ch' },
     my:4
  }}
  autoComplete="off" >
    <Typography variant='h3'>Personal Information</Typography>
      <Container maxWidth="md" sx={{my:4}}>
          <TextField id="name-input" required label="Your name" name="name" value={user.name || ''} onChange={handleInputChange} autoFocus  />
          <InputMask mask="(999) 999-9999" maskChar=" " onChange={handleInputChange} value={user.phone || ''}>
            {() => (
           <TextField id="outlined-required" required label="Your Phone"  variant="outlined"  name="phone"  onChange={handleInputChange}  /> 
           )}
           </InputMask>
    </Container>
</Box>
  )
}
