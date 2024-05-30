
import React, {useRef, useState} from 'react'
import { useAuth } from '../../context/AuthContext';

//MUI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

function SignUp() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const passwordConfirmRef = useRef(null)
  const {signup} = useAuth()

  //Validation and Handle errors
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

 async function handleClick(e) {
  e.preventDefault()


  // console.log(emailRef.current.value, passwordRef.current.value) // Debugging

  if (!emailRef.current || !passwordRef.current || !passwordConfirmRef.current) {
      console.error("One of the refs is null");  // Debugging
      return;
  }

  if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    console.log('Passwords do not match')  // Debugging
    return setError('Passwords do not match');
}

  // Send data to Firebase
  try {
        setError('');
        setLoading(true);
        await signup(emailRef.current.value, passwordRef.current.value);
  } catch (error) {
    setError('Failed to create an account');
  }
    setLoading(false);
  }

  return (
   <ThemeProvider theme={defaultTheme}>
     <Container component="main" maxWidth="xs">
     <CssBaseline />
     <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Sign up
        </Typography>
        <Box style={{ marginTop: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField 
                required
                fullWidth
                id="email"
                placeholder="Email Address"
                name="email"
                type='text'
                inputRef = {emailRef}
                autoFocus
                />
              </Grid>
            <Grid item xs={12}>
              <TextField 
                required
                fullWidth
                name="password"
                placeholder="Password"
                type="password"
                id="password"
                inputRef = {passwordRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                required
                fullWidth
                name="password-confirm"
                placeholder="Password Confirmation"
                type="password"
                id="password-confirm"
                inputRef = {passwordConfirmRef}
               />
            </Grid>
            <Button onClick = {(e) => handleClick(e)} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Submit</Button>
         </Grid>
       </Box>
      </Box>
    </Container>
    </ThemeProvider>  
  )
}

export default SignUp
