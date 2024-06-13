
import {useRef, useState} from 'react'
import { useAuth } from '../../../context/AuthContext';
import {Link, useNavigate} from 'react-router-dom'

//MUI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


import Alert from '@mui/material/Alert'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function ChangePassword() {

  const passwordRef = useRef(null)
  const passwordConfirmRef = useRef(null)

  const navigate =useNavigate()
  const {currentUser, changeUserPassword} = useAuth()


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


    if (passwordRef.current.value){
        promises.push(changeUserPassword(passwordRef.current.value))
    }

    Promise.all(promises)
    .then(() => {
       navigate('/dashboard') 
    })
    .catch(()=> {
        setError('Failed to update account')
    })
    .finally(()=> {
       setLoading(false) 
    })

  }

  return (
    <Box sx={{my: '80px'}}>
     <Container sx = {{ display: 'flex',  justifyContent: 'center', marginTop: '10vh' }}>
     <Box sx={{ width: { xs:'200px', mb:'500px'}, display: 'flex', flexDirection: 'column', alignItems: 'center' }}  >
        <Typography component="h1" variant="h5">
            Change Password
        </Typography>
        <Box sx={{ marginTop: 3 }} >
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
              <TextField  fullWidth name="password"
                placeholder="New password"
                type="password"
                id="password"
                inputRef = {passwordRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                fullWidth
                name="password-confirm"
                placeholder="Repeat new password"
                type="password"
                id="password-confirm"
                inputRef = {passwordConfirmRef}
               />
            </Grid>
            <Button onClick = {(e) => handleClick(e)}  type="submit" color='secondary' fullWidth variant="contained" sx={{ mt: 1, mb: 2, height:'45px' }}>Update</Button>
              
            <Grid container justifyContent="flex-end">
                  <Grid item>
                        <Link to='/dashboard' variant="body2">Cancel</Link>
                  </Grid>
              </Grid>
         </Grid>
       </Box>
      </Box>
    </Container>
  </Box>
  )
}


