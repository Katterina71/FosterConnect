import express from 'express'
const userRouter = express.Router();

import UserController from '../controllers/users-profiles-controllers.js'

//Get all data for debugging
userRouter.get('/', UserController.allProfiles);

// Register User
userRouter.post('/', UserController.register);

// Get All Foster Profile
userRouter.get('/fosters', UserController.getFosterProfile);

// Get All Shelter Profile
userRouter.get('/shelters', UserController.getShelterProfile);

// Get Shelters Profile by location
userRouter.get('/shelters/:town', UserController.getSheltersByLocation);

// Get Fosters Profile by location
userRouter.get('/fosters/:town', UserController.getFostersByLocation );

// Get User Profile
userRouter.get('/:firebaseUid', UserController.getProfile);

// Update User Profile
userRouter.put('/:firebaseUid', UserController.updateProfile);

// Delete User Profile
userRouter.delete('/:firebaseUid', UserController.deleteProfile);






export default userRouter

