import React from 'react'
import { Box, Container, Grid, TextField, Typography } from '@mui/material'

export default function UserInfo() {
  return (
    <Box>
    <Container>
    <Typography variant='h6'>Personal Information</Typography>
    <Grid container spacing={0}>
        <Grid item xs={12}>
            <TextField id="standard-basic" label="Your Name" variant="standard" />
        </Grid>
        <Grid item xs={12}>
             <TextField id="standard-basic" label="You Phone" variant="standard" />
        <Grid item xs={12}>
            <TextField id="standard-basic" label="Subscribe Email" variant="standard" />
        </Grid>
        </Grid>
     </Grid>
    </Container>
</Box>
  )
}
