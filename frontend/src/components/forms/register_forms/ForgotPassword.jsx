import {useRef, useState} from 'react'
import { useAuth } from '../../../context/AuthContext';
import {Link} from 'react-router-dom'

//MUI

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Alert from '@mui/material/Alert'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function ForgotPassword() {
  const emailRef = useRef(null)
  const {resetPassword} = useAuth()


  //Validation and Handle errors
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');


 async function handleClick(e) {
  e.preventDefault()
  // console.log(emailRef.current.value, passwordRef.current.value) // Debugging

  if (!emailRef.current) {
      console.error("One of the refs is null");  // Debugging
      return;
  }
  setMessage('')
  setError('');

  // Send data to Firebase
  try {
        console.log(emailRef.current.value)
        await resetPassword(emailRef.current.value); 
  } catch (error) {
        setError('Failed to Reset Password');
  }
      setMessage('Check your inbox for further instructions ')
  }

  return (
    <Box sx={{my: '80px'}}>
     <Container sx = {{  display: 'flex',  justifyContent: 'center',  marginTop: '10vh'
     }}>
     <CssBaseline />
     <Box  sx={{  width: { xs: '350px', md: '500px' },  display: 'flex',  flexDirection: 'column',  alignItems: 'center', }}>
        <Typography component="h1" variant="h5">
            Password Reset
        </Typography>
        <Box sx={{ marginTop: 3 }} >
          {error && <Alert severity="error" fullWidth>{error}</Alert>}
          {message && <Alert severity="success" fullWidth>{message}</Alert>}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField   required  fullWidth  id="email"  placeholder="Email Address"  name="email"  type='text'  inputRef = {emailRef}  autoFocus  />
              </Grid>
            <Button onClick = {(e) => handleClick(e)} type="submit" color='secondary' fullWidth variant="contained" sx={{ mt: 1, mb: 2, height:'45px' }}>Reset Password</Button>
            <Link to='/login'>Login</Link>
            <Grid container justifyContent="flex-end">
                  <Grid item>
                        <Link to='/signup' variant="body2">Need an account? Sign up</Link>
                  </Grid>
              </Grid>
         </Grid>
       </Box>
      </Box>
    </Container>
    </Box>
  )
}

export default ForgotPassword
