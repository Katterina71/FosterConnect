import { useState } from "react"
import { Typography, Box, Container, FormControlLabel } from "@mui/material"
import Pets from "../components/finder/Pets"
import Shelters from "../components/finder/Shelters"
import MaterialUISwitch from "../components/forms/profile_forms/MaterialUISwitch"

export default function Finder() {
    const [checked, setChecked] = useState(true)

    const handleChange = (e) => {
        const newChecked = e.target.checked
        setChecked(newChecked);
    }

  return (
        <Box sx={{mt:4}}>
            <Container>
                <Typography variant="h1">Find a pet or shelter</Typography>
                <FormControlLabel
                    control={<MaterialUISwitch checked={checked} sx={{ m: 1 }} />}
                    label={checked ? 'Pets Finder' : 'Shelter Finder'} 
                    onChange={handleChange}
                 />
               {checked ? <Pets/> : <Shelters /> } 
             
            </Container>
        </Box>
  )
}
