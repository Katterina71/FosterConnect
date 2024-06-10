import { useState } from 'react';
import { Container, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, Alert } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import usePetsProfile from '../../../hooks/usePetsProfile'

function AddPetForm({ onPetAdded }) {
    const petTypes = ['Dog', 'Cat', 'Bird', 'Other'];
    const lifeStages = ['Puppy/Kitten', 'Juvenile', 'Adult', 'Senior'];
    const sizes = ['Small', 'Medium', 'Large', 'Extra Large'];
    const gender = ['Male', 'Female'];

    const {postPetProfile} = usePetsProfile()


    const [pet, setPet] = useState({
        type: '',
        name: '',
        img: '',
        age_month: '',
        life_stage: '',
        size: '',
        gender: '',
        description: ''
    });

    const [preview, setPreview] = useState('');

    const handleChange = (event) => {
        setPet({
            ...pet,
            [event.target.name]: event.target.value
        });
    };

    const handleImageChange = (event) => {

    const file = event.target.files[0];
    if (file) {
        setPet({ ...pet, img: file });
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'pets_library'); 

    const cloudName = import.meta.env.VITE_REACT_APP_CLOUDINARY_NAME
    const url =`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
    try {
        const response = await fetch(url, { 
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        console.log(data)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status} Message: ${data.error.message}`);
        }
        return data.secure_url; // This is the URL of the uploaded image
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};

  //Utilizes FormData to prepare the data for HTTP submission, which is suitable for sending files.
  const handleSubmit = async (event) => {
    event.preventDefault();


    if (!pet.img) {
        console.log('Please upload an image.');
        return;
    }

    try {
        const uploadedImageUrl = await uploadImage(pet.img);
        const newPet = {...pet, img: uploadedImageUrl}; // Use the URL returned from Cloudinary
        await postPetProfile(newPet);
        console.log('Pet profile successfully added!');
        
        onPetAdded();
        alert('Pet profile added successfully!');
    } catch (error) {
        console.error('Failed to submit the form', error);
        console.log('Failed to process the form: ' + error.message);
    }

};

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" sx={{ mb: 2 }}>Add New Pet Profile</Typography>
            <form onSubmit={handleSubmit}>
            {alert && <Alert severity="error" fullWidth>{alert}</Alert>}
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Type</InputLabel>
                    <Select  value={pet.type}  label="Type"  name="type"  onChange={handleChange}  required  >
                    {petTypes.map(type => (
                        <MenuItem key={type} value={type}>{type}</MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <TextField fullWidth label="Name" name="name" value={pet.name} onChange={handleChange} required  sx={{ mb: 2 }}  />
                
                <Box sx={{ mb: 2, textAlign: 'left' }}>
                    <input accept="image/*"  style={{ display: 'none' }}  id="raised-button-file"  multiple  type="file"  onChange={handleImageChange}  />
                    <label htmlFor="raised-button-file">
                        <Button variant="contained" component="span" startIcon={<PhotoCamera />} color='secondary'>
                            Upload Image
                        </Button>
                    </label>
                    {preview && <Box mt={2} sx={{ textAlign: 'center' }}><img src={preview} alt="Preview" style={{ height: '200px', borderRadius: '8px'}} /></Box>}
                </Box>

                <TextField fullWidth  label="Age (Months)"  name="age_month"  value={pet.age_month}  onChange={handleChange}  required  sx={{ mb: 2 }}  />
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Life Stage</InputLabel>
                    <Select  value={pet.life_stage}  label="Life Stage"  name="life_stage"  onChange={handleChange}  required  >
                    {lifeStages.map(stage => (
                        <MenuItem key={stage} value={stage}>{stage}</MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Size</InputLabel>
                    <Select  value={pet.size}  label="Size"  name="size"  onChange={handleChange}  required  >
                    {sizes.map(size => (
                        <MenuItem key={size} value={size}>{size}</MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Gender</InputLabel>
                    <Select value={pet.gender} label="Gender" name="gender" onChange={handleChange}  required>
                        {gender.map(gender => (
                        <MenuItem key={gender} value={gender}>{gender}</MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <TextField  fullWidth  label="Description"  name="description"  value={pet.description}  onChange={handleChange}   multiline  rows={4} sx={{ mb: 2 }}
                />
                <Button type="submit" variant="contained" color="secondary" >Add New Pet</Button>
            </form>
        </Container>
    );
}

export default AddPetForm;