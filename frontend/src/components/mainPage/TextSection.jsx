import { Box, Container, Grid, Typography, CardMedia } from "@mui/material"

export default function TextSection() {

 const imgPath = './main-page.jpg'

  return (
    <Box sx={{my:6}}>
        <Container>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 12 }}>
            <Grid item xs={6}>
                <Typography variant="h2" sx={{mb:4}}>Become a Foster: Transform Lives Today</Typography>
                <Typography variant="body" paragraph>Becoming a foster today offers a unique opportunity to make a significant difference in the lives of animals in need. As a foster, you provide a temporary, loving home to pets that require care beyond what can be provided in a shelter environment. 
                </Typography>
                <Typography variant="body" paragraph> This crucial role helps prepare animals for adoption, giving them a better chance at finding a permanent home. Fostering not only reduces stress on the animals but also allows shelters to accommodate more pets in need. You&apos;ll receive support in the form of training, resources, and sometimes medical care for the fostered pets. Whether caring for puppies, kittens, or older animals, your contribution fosters a sense of community and promotes humane treatment of animals.</Typography>
                <Typography variant="body" paragraph> Join a network of compassionate individuals committed to animal welfare and experience the joy and fulfillment that comes from fostering. Start your journey today and see the profound impact you can have on the lives of these deserving animals.</Typography>
            </Grid>
            <Grid item xs={6}>
                <CardMedia sx={{ height: 600, borderRadius: 2 }} image={imgPath}  title='Be Foster' />
            </Grid>
        </Grid>
        </Container>
    </Box>
  )
}
