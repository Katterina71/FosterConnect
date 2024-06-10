import express from 'express'
import PetController from '../controllers/pets-profiles-controllers.js'

const petRouter = express.Router();



// Get All Pets Profile
petRouter.get('/', PetController.getAllPets)

// Get All Pets Profile by type and location
petRouter.get('/', PetController.getPetsByTypeAndLocation)

// Create Pet Profile
petRouter.post('/:shelter_id', PetController.createPet);

// Update Pet Profile
petRouter.patch('/', PetController.updatePet);

// Delete Pet Profile
petRouter.delete('/:id', PetController.deletePet);

// Get All Pets Profile by shelter
petRouter.get('/:shelter_id', PetController.getAllPetsByShelter);

export default petRouter