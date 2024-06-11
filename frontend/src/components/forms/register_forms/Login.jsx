// import React, {useRef, useState} from 'react'
import {useRef, useState} from 'react'
import { useAuth } from '../../../context/AuthContext';
import {Link, useNavigate} from 'react-router-dom'

import {Box,Container,Grid, Avatar, Button, CssBaseline, Typography, TextField, Alert} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


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

  if (!emailRef.current.value|| !passwordRef.current.value ) {
      console.error("One of the refs is null");  // Debugging
      setError("One of the refs is null");
      return;
  }

  setError('');
  setLoading(true);
  // Send data to Firebase
  try {
      await login(emailRef.current.value, passwordRef.current.value, navigate);
  } catch (error) {
    setLoading(false);

     if (error.message === 'Firebase: Error (auth/invalid-email).') {
      setError(`We can’t find an account. Please enter a valid email address or create new account`);
     } else
      {setError(`We can’t find an account. The password you entered is incorrect or account not exist. Please try again.`)}
  }
   
  }

  return (
    <Box sx={{my: '80px'}}>
     <Container  sx = {{  display: 'flex', justifyContent: 'center', marginTop: '10vh',   }}>
     <CssBaseline />
     <Box style={{  width: '500px',
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
