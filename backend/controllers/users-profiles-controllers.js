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
        const { firebaseUid, email} = req.body;
        console.log(req.body); // Debugging
        try {
            const newUser = new UsersProfiles({
                firebaseUid,
                email
            });
            console.log('Create user')
            await newUser.save();
            res.status(201).json('User registered successfully.');
        } catch (error) {
            console.error(error)
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
            console.log('Update profile')
            console.log(req.body) // Ensure the body is as expected
            const { name, shelter, shelter_name, phone, status, address, fostering_preferences } = req.body;

            const data = {
                name: req.body.userInfo.name,  
                shelter: req.body.userInfo.shelter,
                shelter_name: req.body.userInfo.shelter_name,
                phone:  req.body.userInfo.phone,
                status,
                address,
                fostering_preferences: fostering_preferences[0] || []  // Ensure it's an array
            };
     
            console.log(data) // Debugging
            const updateUser = await UsersProfiles.findOneAndUpdate(
                { firebaseUid: req.params.firebaseUid },
                { $set: data} ,
                { new: true, runValidators: true }  // Ensure updated document is returned and validators run
            );
                if (!updateUser) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.json(updateUser);
        } catch (error) {
            console.error(error);  // More detailed logging
            res.status(500).json({message:error.message})
            
        }
    },
    deleteProfile: async (req,res) => {
        try {
            console.log('Remove profile')
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