import React from 'react'
import { Box, Container, Grid, TextField, Typography } from '@mui/material'

export default function AddressForm() {
  return (
    <Box>
    <Container>
    <Typography variant='h6'>Add your Address</Typography>
    <Grid container spacing={0}>
        <Grid item xs={12}>
            <TextField id="standard-basic" label="Street Address" variant="standard" />
        </Grid>
        <Grid item xs={12}>
             <TextField id="standard-basic" label="Town" variant="standard" />
        <Grid item xs={12}>
            <TextField id="standard-basic" label="County" variant="standard" />
        </Grid>
        <Grid item xs={12}>
            <TextField id="standard-basic" label="Postal Code" variant="standard" />
        </Grid>
        <Grid item xs={12}>
            <TextField id="standard-basic" label="State" variant="standard" />
        </Grid>
        </Grid>
     </Grid>
    </Container>
</Box>
  )
}
