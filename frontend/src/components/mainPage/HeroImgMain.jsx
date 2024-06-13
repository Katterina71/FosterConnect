import {Box, Grid , Button, Container} from '@mui/material';
import { Link } from 'react-router-dom';  

export default function HeroImgMain({imgPath, imgHeight}) {

  return (
    <Container maxWidth="false" disableGutters> {/* Remove maxWidth constraint and disable gutters */}
      <Grid container spacing={0}> {/* Remove spacing if you want the image to stretch fully */}
        <Grid item xs={12}>
        <Box
            sx={{
              position: 'relative', // Position relative to enable absolute positioning of the button
              height: imgHeight,
              width: '100%',
            }}
          >
        <Box
            component="img"
            sx={{
              height: imgHeight, // Set the height to 600px
              width: '100%', // Ensure the width is 100% of the container
              objectFit: 'cover', // Cover the area without distorting the aspect ratio
              objectPosition: 'center', // Focus the center of the image
              display: 'block' // Remove bottom space/gap under the image
            }}
            src={imgPath}
            alt='Hero background'
          />
          <Button
              component={Link}
              to="/finder"
              variant="contained"
              color="secondary"
              sx={{
                width: '200px',
                position: 'absolute',
                bottom: 60, 
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              Find A Pet
            </Button>
            </Box>
        </Grid>
      </Grid>
    </Container>
  );
}