import {useState, useEffect} from 'react'
import { Box, Container, TextField, Typography, Alert } from '@mui/material'

//To apply the phone mask:
import InputMask from 'react-input-mask';

import { useFormContext } from '../../../context/FormContext';
// import {useAuth} from '../../../context/AuthContext'

export default function UserInfo({user}) {

  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
  });

  const { updateFormData } = useFormContext();
  

  // Effect to update local state when user prop changes
  useEffect(() => {
    if (user) {
      setUserInfo({
        name: user.name || '',
        phone: user.phone || '',
      });
    }
  }, []);


  //validation form
  const validateField = (name, value) => {
    let error = '';
    if (value.trim() === '') {
      error = `The ${name} field is required.`;
    }
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error
    }));
    return error === '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
    validateField(name, value);
    updateFormData('userInfo', { [name]: value });
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
          <TextField id="name" label="Your name" name="name" value={userInfo.name} onChange={handleInputChange} error={Boolean(errors.name)} helperText={errors.name} required/>
          <InputMask id="phone" mask="(999) 999-9999" maskChar="" name="phone" value={userInfo.phone} onChange={handleInputChange} required >
            {() => (
           <TextField id="phone"  label="Your Phone"  variant="outlined"  name="phone" error={Boolean(errors.phone)}  helperText={errors.phone} required/> 
           )}
           </InputMask>
    </Container>
    {Object.values(errors).map((error, index) => (
            error && <Alert key={index} severity="error">{error}</Alert> ))}
</Box>
  )
}
