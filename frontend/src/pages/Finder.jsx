import { Typography, Box, Container } from "@mui/material"
import Pets from "../components/finder/Pets"
import Shelters from "../components/finder/Shelters"

export default function Finder() {
  return (
        <Box sx={{mt:4}}>
            <Container>
                <Typography variant="h1">Find a pet or shelter</Typography>
                <Pets/>
                <Shelters />
            </Container>
        </Box>
  )
}
