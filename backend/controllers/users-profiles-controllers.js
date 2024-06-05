import UsersProfiles from "../models/users-profiles.js";
// import admin from 'firebase-admin'


const UserController = {

    // Debugging Working Routes
    allProfiles: async(req,res) => {
        try {
            const data =  await UsersProfiles.find();
            res.status(200).json(data)
            console.log('Get all users')
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    },

    register: async(req, res) => {
        const { firebaseUid, contact_info} = req.body;
        console.log(req.body); // Debugging
        try {
            const newUser = new UsersProfiles({
                firebaseUid,
                contact_info,
            });
            console.log('Hello')
            await newUser.save();
            res.status(201).json('User registered successfully.');
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    },
   

    getProfile: async (req,res) => {
        try {
            const user = await UsersProfiles.findOne({firebaseUid: req.params.firebaseUid});
            if (!user) {
                return res.status(404).json({message: 'User not found'})
            }    
            res.json(user)        
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    },

    updateProfile: async (req,res) => {
        try {
            console.log('update')
            console.log(req.body)
            const updateUser =await UsersProfiles.findByOneAndUpdate({firebaseUid: req.params.firebaseUid},req.body)
            res.json(updateUser)
        } catch (error) {
            res.status(500).json({message:error.message})
            
        }
    },
    deleteProfile: async (req,res) => {
        try {
            await UsersProfiles.findByOneAndDelete({firebaseUid: req.params.firebaseUid})
            res.status(204).send({message: 'User was delete'})
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    },


    // Get all data of Fosters or Shelters
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

    //Find all Fosters or Shelter by Town

    getFostersByLocation: async (req,res) => {
        try {
            const fosters = await UsersProfiles.find({shelter: false, 'address.town':req.params.town})
            res.json(fosters)
            
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    },
    getSheltersByLocation: async (req,res) => {
        try {
            const shelters = await UsersProfiles.find({shelter: true, 'address.town': req.params.town})
            res.json(shelters)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }
}

export default UserController