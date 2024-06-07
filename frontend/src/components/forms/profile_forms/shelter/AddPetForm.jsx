import React, { useState } from 'react';
import { Container, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

function AddPetForm() {
    const petTypes = ['Dog', 'Cat', 'Bird', 'Other'];
    const lifeStages = ['Puppy/Kitten', 'Juvenile', 'Adult', 'Senior'];
    const sizes = ['Small', 'Medium', 'Large', 'Extra Large'];
    const gender = ['Male', 'Female'];

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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(pet);
        // Here you would typically handle the form submission to your backend
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h6" sx={{ mb: 2 }}>Add New Pet Profile</Typography>
            <form onSubmit={handleSubmit}>
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
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        multiple
                        type="file"
                        onChange={handleImageChange}
                    />
                    <label htmlFor="raised-button-file">
                        <Button variant="contained" component="span" startIcon={<PhotoCamera />} color='secondary'>
                            Upload Image
                        </Button>
                    </label>
                    {preview && <Box mt={2} sx={{ textAlign: 'center' }}><img src={preview} alt="Preview" style={{ height: '100px' }} /></Box>}
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
                <Button type="submit" variant="contained" color="secondary" >Add Pet</Button>
            </form>
        </Container>
    );
}

export default AddPetForm;
