import express from 'express'
const userRouter = express.Router();

import UserController from '../controllers/users-profiles-controllers.js'

// Register User
userRouter.post('/register', UserController.register);

// Get User Profile
userRouter.get('/profile', UserController.getProfile);

userRouter.get('/login', UserController.login)

// Update User Profile
userRouter.patch('/profile', UserController.updateProfile);

// Delete User Profile
userRouter.delete('/profile', UserController.deleteProfile);

// Get Foster Profile
userRouter.get('/dashboard/foster', UserController.getFosterProfile);

// Get Shelter Profile
userRouter.get('/dashboard/shelter', UserController.getShelterProfile);

// Get Shelters Profile by location
userRouter.get('/shelters/location', UserController.getSheltersByLocation);


// Get Fosters Profile by location
userRouter.get('/fosters/location', UserController.getFostersByLocation );




export default userRouter

