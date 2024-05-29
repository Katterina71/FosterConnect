import express from 'express'
const petRouter = express.Router();

import PetsProfiles from '../models/pets-profiles.js'
import UsersProfiles from '../models/users-profiles.js'

// Get All Pets Profile
petRouter.get('/', (req, res) => {
    // Logic to get all pets
});

// Create Pet Profile
petRouter.post('/', (req, res) => {
    // Logic to create a pet
});

// Update Pet Profile
petRouter.patch('/', (req, res) => {
    // Logic to create a pet
});


// Delete Pet Profile
petRouter.delete('/', (req, res) => {
    // Logic to create a pet
});

// Get All Pets Profile by shelter
petRouter.get('/shelter', (req, res) => {
    // Logic to get all pets
});

export default petRouter