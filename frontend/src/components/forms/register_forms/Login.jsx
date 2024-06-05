// import React, {useRef, useState} from 'react'
import {useRef, useState} from 'react'
import { useAuth } from '../../../context/AuthContext';
import {Link, useNavigate} from 'react-router-dom'

//MUI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Alert from '@mui/material/Alert'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';




function Login() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const {login} = useAuth()


  //Validation and Handle errors
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  //History Hook
  const navigate = useNavigate()

 async function handleClick(e) {
  e.preventDefault()


  // console.log(emailRef.current.value, passwordRef.current.value) // Debugging

  if (!emailRef.current || !passwordRef.current ) {
      console.error("One of the refs is null");  // Debugging
      return;
  }

//   if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//     console.log('Passwords do not match')  // Debugging
//     return setError('Passwords do not match');
// }

  // Send data to Firebase
  try {
        setError('');
        setLoading(true);
        console.log(emailRef.current.value, passwordRef.current.value)
        await login(emailRef.current.value, passwordRef.current.value);

        //Sen to another page
        navigate('/profile')
  } catch (error) {
    setError('Failed to Sign In');
  }
    setLoading(false);
  }

  return (
    <Box sx={{my: '80px'}}>
     <Container  style = {{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10vh',
     }}>
    
     <CssBaseline />
     <Box
          style={{
            width: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
       
          }}
        >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Log In
        </Typography>
        <Box style={{ marginTop: 3 }} >
          {error && <Alert severity="error" fullWidth>{error}</Alert>}
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
            <Button onClick = {(e) => handleClick(e)} type="submit" color='secondary' fullWidth variant="contained" sx={{ mt: 1, mb: 2, height:'45px' }}>Log In</Button>
            <Link to='/forgot-password'>Forgot Password?</Link>
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

export default Login
