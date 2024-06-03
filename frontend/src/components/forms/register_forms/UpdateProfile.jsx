
import React, {useRef, useState} from 'react'
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
import { createTheme, ThemeProvider } from '@mui/material/styles';

// const defaultTheme = createTheme({
//   palette: {
//     primary: { main: '#556cd6' },
//     secondary: { main: '#19857b' },
//   },
// });



function UpdateProfile() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const passwordConfirmRef = useRef(null)

  const navigate =useNavigate()
  const {currentUser,  changeUserEmail,  changeUserPassword} = useAuth()

  const [agree, setAgree] = useState(false);

  //Validation and Handle errors
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleClick(e) {
  e.preventDefault()

  if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    console.log('Passwords do not match')  // Debugging
    return setError('Passwords do not match');
}

    const promises = []
    setError('');
    setLoading(true);

    if (emailRef.current.value !== currentUser.email){
        console.log('update email:' + emailRef.current.value)
        promises.push(changeUserEmail(emailRef.current.value))
    }
    if (passwordRef.current.value){
        promises.push(changeUserPassword(passwordRef.current.value))
    }

    Promise.all(promises)
    .then(() => {
       navigate('/profile') 
    })
    .catch(()=> {
        setError('Failed to update account')
    })
    .finally(()=> {
       setLoading(false) 
    })

  }

  return (
 
     <Container component="main" style = {{
      width: '100vh',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10vh'
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
            Update Profile
        </Typography>
        <Box style={{ marginTop: 3 }} >
          {error && <Alert severity="error" fullWidth>{error}</Alert>}
          <Grid container spacing={2}>
           {/*Not allow to change email on firebase*/}
            {/* <Grid item xs={12}>
              <TextField 
                fullWidth
                id="email"
                placeholder="Email Address"
                name="email"
                type='text'
                inputRef = {emailRef}
                autoFocus
                defaultValue={currentUser.email}
                />
              </Grid> */}
            <Grid item xs={12}>
              <TextField 
                fullWidth
                name="password"
                placeholder="Leave blank to keep the same"
                type="password"
                id="password"
                inputRef = {passwordRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                fullWidth
                name="password-confirm"
                placeholder="Leave blank to keep the same"
                type="password"
                id="password-confirm"
                inputRef = {passwordConfirmRef}
               />
            </Grid>
            <Button onClick = {(e) => handleClick(e)} type="submit" variant="contained" sx={{ mt: 1, mb: 2, height:'45px' }}>Update</Button>
            <Grid container justifyContent="flex-end">
                  <Grid item>
                        <Link to='/' variant="body2">Cancel</Link>
                  </Grid>
              </Grid>
         </Grid>
       </Box>
      </Box>
    </Container>

  )
}

export default UpdateProfile
