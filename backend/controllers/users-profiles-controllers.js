import UsersProfiles from "../models/users-profiles.js";
// import admin from 'firebase-admin'


const UserController = {
    register: async(req, res) => {
        const { firebaseUid, name, email, address, contact_info, fostering_preferences, shelter, shelter_name } = req.body;
        console.log(req.body); // Debugging
        try {
            const newUser = new UsersProfiles({
                firebaseUid,
                name,
                email, 
                address,
                contact_info,
                fostering_preferences,
                shelter,
                shelter_name 
            });
            await newUser.save();
            res.status(201).send('User registered successfully.');
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    },
    login: async (req,res) => {
        const {email, password} = req.body;
        try {
            const user = await UsersProfiles.findOne({email});
            if (!user) {
                res.status(404).send('User not found')
            }
            
        } catch (error) {
            res.status(500).json({message: error.message})
        }

    },
    getProfile: async (reg,res) => {
        try {
            const user = await UsersProfiles.findById(req.params.userId);
            if (!user) {
                return res.status(404).send({message: 'User not found'})
            }    
            res.json(user)        
        } catch (error) {
            req.status(500).json({message:error.message})
        }
    },
    updateProfile: async (req,res) => {
        try {
            const updateUser =await UsersProfiles.findByIdAndUpdate(req.params.userId,req.body)
            res.json(updateUser)
        } catch (error) {
            res.status(500).json({message:error.message})
            
        }
    },
    deleteProfile: async (req,res) => {
        try {
            await UsersProfiles.findByIdAndDelete(req.params.userId)
            res.status(204).send({message: 'User was delete'})
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    },
    getFosterProfile: async (req,res) => {
        try {
            const fosters = await UsersProfiles.find({shelter: false})
            res.json(fosters)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    },
    getShelterProfile: async (req,res) => {
        try {
            const shelters = await UsersProfiles.find({shelter: true})
            res.json(shelters)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    },
    getFostersByLocation: async (req,res) => {
        try {
            const fosters = await UsersProfiles.find({shelter: false, 'address.town': town})
            res.json(fosters)
            
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    },
    getSheltersByLocation: async (req,res) => {
        try {
            const shelters = await UsersProfiles.find({shelter: true, 'address.town': town})
            res.json(shelters)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }
}

export default UserController