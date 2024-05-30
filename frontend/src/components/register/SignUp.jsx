
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
import Alert from '@mui/material/Alert'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    primary: { main: '#556cd6' },
    secondary: { main: '#19857b' },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          height: '100vh', // Make container full height of the viewport
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Center vertically
          alignItems: 'center' // Center horizontally
        }
      }
    }
  }
});

function SignUp() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const passwordConfirmRef = useRef(null)
  const {signup} = useAuth()

  const [agree, setAgree] = useState(false);

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

  if (!agree) {
    setError('You must agree to the website\'s policies to sign up.');
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
     <Container component="main">
     <CssBaseline />
     <Box
          sx={{
            width: '100%',
            maxWidth: 360,
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
            <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox checked={agree} onChange={() => setAgree(!agree)} value="allowExtraEmails" color="primary" required />}
                  label="I agree with Website's Policies"
                />
              </Grid>
            <Button onClick = {(e) => handleClick(e)} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Submit</Button>
            <Grid container justifyContent="flex-end">
                  <Grid item>
                        <Link href="#" variant="body2">Already have an account? Sign in</Link>
                  </Grid>
              </Grid>
         </Grid>
       </Box>
      </Box>
    </Container>
    </ThemeProvider>  
  )
}

export default SignUp
