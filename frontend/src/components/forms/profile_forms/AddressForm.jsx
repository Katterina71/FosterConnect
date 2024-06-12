import {useEffect, useState} from 'react'
import { Box, Container, TextField, Typography } from '@mui/material'

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress(prevState => ({
      ...prevState,
      [name]: value
    }));
    updateFormData('address', { [name]: value });
};

  return (
    <Box
        component="form"
        sx={{  '& .MuiTextField-root': { m: 2, width: 'ch' },  my:4  }}
        autoComplete="off">

    <Typography variant='h3'>Add your Address</Typography>

    <Container  maxWidth="md" sx={{my:4}}>
            <TextField id="street_address" required label="Street Address" name="street_address"  value = {address.street_address || ''}  onChange={handleInputChange} autoFocus  />
            
            <TextField required id="town" label="Town" name='town' value = {address.town}  onChange={handleInputChange} />
    
            <TextField required id="county" label="County" name='county' value = {address.county}   onChange={handleInputChange} />

            <TextField required id="postalCode" label="Postal Code" name='postal_code' value = {address.postal_code}   onChange={handleInputChange}/>

            <TextField required id="state" label="State" name='state' value = {address.state}    onChange={handleInputChange}/>
    </Container>
</Box>
  )
}
