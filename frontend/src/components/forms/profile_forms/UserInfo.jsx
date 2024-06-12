import {useState, useEffect} from 'react'
import { Box, Container, TextField, Typography } from '@mui/material'

//To apply the phone mask:
import InputMask from 'react-input-mask';

import { useFormContext } from '../../../context/FormContext';
// import {useAuth} from '../../../context/AuthContext'

export default function UserInfo({user}) {

  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
  });

  const { updateFormData } = useFormContext();
  const [isValid, setIsValid] = useState(true);


  // Effect to update local state when user prop changes
  useEffect(() => {
    if (user) {
      setUserInfo({
        name: user.name || '',
        phone: user.phone || '',
      });
    }
  }, []);


  const validateField = (value) => {
    setIsValid(value.trim() !== "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({  name: value  })
    updateFormData('userInfo', { [name]: value });
    // validateField(value);
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
          <TextField id="name" required label="Your name" name="name" value={userInfo.name} onChange={handleInputChange}/>
          <InputMask id="phone" mask="(999) 999-9999" maskChar="" name="phone" value={userInfo.phone}  onChange={handleInputChange} >
            {() => (
           <TextField id="phone" required label="Your Phone"  variant="outlined"  name="phone"   /> 
           )}
           </InputMask>
    </Container>
</Box>
  )
}
