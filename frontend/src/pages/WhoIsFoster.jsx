import { Box, Container, Typography } from "@mui/material"
import FormSection from "../components/mainPage/FormSection"

export default function WhoIsFoster() {
  return (
    <Box sx={{my:6}}>
        <Container>
            <Typography variant="h1">Who is Foster?</Typography>
            <Box sx={{my:6}}>
            <Typography variant="body1" paragraph>
                <strong>Definition:</strong> Fosters are volunteers who temporarily care for animals from shelters or rescue organizations in their own homes.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Role Importance:</strong> They play a critical role in the animal rescue ecosystem by providing care that extends beyond what can be offered in a shelter environment.
            </Typography>

            <Typography variant="h3" sx={{my:4}}>
                Responsibilities of Fosters
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Care:</strong> Provide daily care, including feeding, grooming, and exercising the animals.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Medical Care:</strong> Administer medications, take the animals to veterinary appointments, and monitor any health issues.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Socialization and Training:</strong> Help the animals become well-adjusted and sociable, making them more suitable for adoption.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Emotional Support:</strong> Offer the love and stability these animals need to thrive, often during a critical period of their lives.
            </Typography>

            <Typography variant="h3" sx={{my:4}}>
                Benefits for the Animals
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Stress Reduction:</strong> Being in a home environment reduces stress compared to a shelter, promoting better health and behavior.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Increased Adoptability:</strong> Animals in foster care receive individual attention, which helps resolve behavior issues and prepares them for life in a permanent home.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Specialized Care:</strong> Young, elderly, or sick animals get the specific care they need, which might be challenging to provide in a shelter.
            </Typography>

            <Typography variant="h3" sx={{my:4}}>
                Support for Fosters
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Resources:</strong> Shelters and rescue organizations often provide fosters with the necessary supplies, such as food, bedding, and medical care.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Training and Support:</strong> Guidance and training are usually available to help fosters manage their caregiving responsibilities effectively.
            </Typography>

            <Typography variant="h3" sx={{my:4}}>
                Impact of Fostering
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Community Engagement:</strong> Fostering increases community involvement in animal welfare and encourages more humane treatment of animals.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Saving Lives:</strong> Every foster home increases the capacity of shelters, allowing them to rescue more animals.
            </Typography>

            <Typography variant="h3" sx={{my:4}}>
                Conclusion
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Rewarding Experience:</strong> Fostering is profoundly gratifying, knowing that you are providing a lifeline for animals in need and playing a direct role in preparing them for a new, loving home.
            </Typography>
            </Box>
            <FormSection/>
        </Container>
    </Box>

  )
}
