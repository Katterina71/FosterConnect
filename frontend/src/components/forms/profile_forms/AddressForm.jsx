import {useEffect, useState} from 'react'
import { Box, Container, TextField, Typography, Alert } from '@mui/material'

//Collect global variables 
import { useFormContext } from '../../../context/FormContext';


export default function AddressForm({user}) {

  const [address, setAddress] = useState({
    street_address: '',
    town: '',
    county: '',
    postal_code: '',
    state: ''
  });


  const [errors, setErrors] = useState({
    street_address: '',
    town: '',
    county: '',
    postal_code: '',
    state: ''
  });

  const { updateFormData } = useFormContext();

  // Effect to update local state when user prop changes
  useEffect(() => {
    if (user && user.address && user.address.length > 0) {
      const userAddress = user.address[0];
      setAddress({
        street_address: userAddress.street_address || '',
        town: userAddress.town || '',
        county: userAddress.county || '',
        postal_code: userAddress.postal_code || '',
        state: userAddress.state || ''
      });
    } else {
      setAddress({
        street_address: '',
        town: '',
        county: '',
        postal_code: '',
        state: ''
      });
    }
  }, [user]);

  //Validation
  const validateField = (name, value) => {
    let error = '';
    if (value.trim() === '') {
      error = `The ${name.replace('_', ' ')} field is required.`;
    } else if (name === 'postal_code' && !/^\d+$/.test(value)) {
      error = 'The postal code must be numeric.';
    }
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error
    }));
    return error === '';
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress(prevState => ({
      ...prevState,
      [name]: value
    }));
    validateField(name, value);
    updateFormData('address', { [name]: value });
};

  return (
    <Box
        component="form"
        sx={{  '& .MuiTextField-root': { m: 2, width: 'ch' },  my:4  }}
        autoComplete="off">

    <Typography variant='h3'>Add your Address</Typography>

    <Container  maxWidth="md" sx={{my:4}}>
            <TextField id="street_address"  label="Street Address" name="street_address"  value = {address.street_address || ''}  onChange={handleInputChange} autoFocus error={Boolean(errors.street_address)}  helperText={errors.street_address} required/>            
            <TextField  id="town" label="Town" name='town' value = {address.town}  onChange={handleInputChange} error={Boolean(errors.town)} helperText={errors.town} required/>    
            <TextField  id="county" label="County" name='county' value = {address.county}   onChange={handleInputChange}  error={Boolean(errors.county)} helperText={errors.county} required/>
            <TextField  id="postalCode" label="Postal Code" name='postal_code' value = {address.postal_code}   onChange={handleInputChange}  error={Boolean(errors.postal_code)}  helperText={errors.postal_code} required/>
            <TextField  id="state" label="State" name='state' value = {address.state}    onChange={handleInputChange}  error={Boolean(errors.state)}  helperText={errors.state} required/>
            {Object.values(errors).map((error, index) => (
            error && <Alert key={index} severity="error">{error}</Alert>
        ))}
    </Container>
</Box>
  )
}
