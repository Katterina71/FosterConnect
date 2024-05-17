import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// address Schema
const   addressSchema = new Schema ({
    address : { 
     street_address: String,
     county: String,
     postal_code: Number,
     state: String,
   }
 }, {
   _id: false
 });
 
 // contactInfo Schema
 const contactInfoSchema = new Schema ({
    email: String,
    phone: Number,
 }, {
   _id: false 
 });

 // fosteringPreferences Schema
 const fosteringPreferencesSchema = new Schema ({
    pet : {
        pet_type: String,
        life_stage: String,
        size: String
    }
  }, {
    _id: false 
  });

// Main Document Schema for User Profile
const usersProfilesSchema = new Schema({
    _id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    shelter : {
        type : Boolean,
        required: true,
    },
    contact_info : [contactInfoSchema],
    address : [addressSchema],
    fostering_preferences: [fosteringPreferencesSchema],
    status : {
        type: String,
        default: 'Active'
    },
    created_at: {
        type: Date,
        default: Date.now // Sets default value to the current date and time
    }  
  }
  )
  
  
  const UsersProfiles = mongoose.model('users-profiles',usersProfilesSchema)
  export default UsersProfiles;