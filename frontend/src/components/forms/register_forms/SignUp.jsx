
// import React, {useRef, useState} from 'react'
import {useRef, useState} from 'react'
import { useAuth } from '../../../context/AuthContext';
import {Link, useNavigate} from 'react-router-dom'

//MUI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Alert from '@mui/material/Alert'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function SignUp() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const passwordConfirmRef = useRef(null)

  const navigate =useNavigate()
  const {signup} = useAuth()

  const [agree, setAgree] = useState(false);

  //Validation and Handle errors
  const [error, setError] = useState('');
  

 async function handleClick(e) {
  e.preventDefault()
  


  // console.log(emailRef.current.value, passwordRef.current.value) // Debugging

  if (!emailRef.current || !passwordRef.current || !passwordConfirmRef.current) {
      console.error("One of the refs is null");  // Debugging
      return;
  }

  if (!agree) {
    setError('You must agree to the website\'s policies to sign up.');
    return;
  }

  if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    console.log('Passwords do not match')  // Debugging
    return setError('Passwords do not match');
}


  setError('');  // Clear any previous errors
 

  // Send data to Firebase
  try {
        // Attempt to sign up the user
         await signup(emailRef.current.value, passwordRef.current.value, navigate);    
  } catch (error) {
        //Checking if user has already exist 
        console.error("Error during signup:", error);
        setError('Failed to create an account: ' + error.message);  // Display the actual error message from Firebase
  } 
  }

  return (
  <Box sx={{my: '80px'}}>
     <Container  sx = {{  display: 'flex',  justifyContent: 'center',  marginTop: '10vh' }}>
     <CssBaseline />
     <Box  style={{  width: '500px',  display: 'flex',  flexDirection: 'column',  alignItems: 'center',  }}  >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Sign up
        </Typography>
        <Box style={{ marginTop: 3 }} >
          {error && <Alert severity="error" fullWidth>{error}</Alert>}
          {error && error.includes('Email already in use.') && (
        <Alert severity="warning" fullWidth>Warning: This email is already in use. Please use a different email or log in.</Alert>
         )}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField   required  fullWidth  id="email"  placeholder="Email Address"  name="email" type='text'  inputRef = {emailRef}  autoFocus  />
              </Grid>
            <Grid item xs={12}>
              <TextField   required  fullWidth  name="password"  placeholder="Password"  type="password"  id="password"  inputRef = {passwordRef}  />
            </Grid>
            <Grid item xs={12}>
              <TextField   required  fullWidth  name="password-confirm"  placeholder="Password Confirmation" type="password"  id="password-confirm"  inputRef = {passwordConfirmRef} />
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox checked={agree} onChange={() => setAgree(!agree)} value="allowExtraEmails" color="primary" required />}
                  label="I agree with Website's Policies"
                />
              </Grid>
            <Button onClick = {(e) => handleClick(e)} type="submit" color='secondary' fullWidth variant="contained" sx={{ mt: 1, mb: 2, height:'45px' }}>Sign Up</Button>
            <Grid container justifyContent="flex-end">
                  <Grid item>
                        <Link to='/login' variant="body2">Already have an account? Log in</Link>
                  </Grid>
              </Grid>
         </Grid>
       </Box>
      </Box>
    </Container>
  </Box>
  )
}

export default SignUp
