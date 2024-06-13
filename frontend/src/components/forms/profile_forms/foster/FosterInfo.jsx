
import {  useState } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import PetPreferences from '../foster/PetPreferences'; // Assuming this is the correct import path
import { useFormContext } from '../../../../context/FormContext';
import { Delete } from '@mui/icons-material';

const FosterInfo = ({petArray}) => {
    const [petPreferences, setPetPreferences] = useState(petArray);
    const [submitted, setSubmitted] = useState(false); // State to track if the preferences have been submitted
    const { updateFormData } = useFormContext();

 

    console.log('Pet FosterInfo:')
    console.log(petPreferences);

    const handleAddPetPreference = () => {
        if (!submitted) { // Allow adding new preferences only if not submitted
            setPetPreferences([...petPreferences, { pet_type: '', life_stage: '', size: '' }]);
        }
    };

    const handleRemovePetPreference = (index) => {
        if (!submitted) { // Allow removing preferences only if not submitted
        setPetPreferences(petPreferences.filter((_, i) => i !== index));
        }
    };

    const updatePreference = (index, updatedPreference) => {
     if (!submitted) { // Allow removing preferences only if not submitted
        const updatedPreferences = [...petPreferences];
        updatedPreferences[index] = updatedPreference;
        setPetPreferences(updatedPreferences);
     }
    };

    const handleSubmit = () => {
        console.log(petPreferences)
        updateFormData('fostering_preferences', petPreferences);  // This would push all preferences to context
        setSubmitted(true); // Change the state to show the submitted view
    };

    return (
        <Box sx={{ my: 4 }}>
        <Container>
            <Typography>Add your pet preferences below:</Typography>
            <form>
            {submitted ? (
                petPreferences.map((preference, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                        <Typography>Type: {preference.pet_type}</Typography>
                        <Typography>Life Stage: {preference.life_stage}</Typography>
                        <Typography>Size: {preference.size}</Typography>
                    </Box>
                ))
            ) : (
                petPreferences.map((preference, index) => (
                    <Box key={index}>
                        <PetPreferences preference={preference} index={index} updatePreference={updatePreference} />
                        <Button onClick={() => handleRemovePetPreference(index)} variant="contained" color="error" sx={{ mt: 1 }} startIcon={<Delete/>}>
                            Remove
                        </Button>
                    </Box>
                ))
            )}
            {!submitted && (
                <>
                    <Button onClick={handleAddPetPreference} variant="contained" color="secondary" sx={{ my: 2, bgcolor: 'secondary.light' }}>
                        Add New Pet Preference
                    </Button>
                    <Button onClick={handleSubmit} variant="contained" color="warning" sx={{ my: 2, ml: 4 }}>
                        Submit All Preferences
                    </Button>
                </>
            )}
            </form>
        </Container>
    </Box>
    );
};

export default FosterInfo;
