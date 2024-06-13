
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';  // Import Box for additional styling capabilities

export default function HeroImg({imgPath, imgHeight}) {

  return (
    <Container maxWidth="false" disableGutters> {/* Remove maxWidth constraint and disable gutters */}
      <Grid container spacing={0}> {/* Remove spacing if you want the image to stretch fully */}
        <Grid item xs={12}>
        
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
        </Grid>
      </Grid>
    </Container>
  );
}