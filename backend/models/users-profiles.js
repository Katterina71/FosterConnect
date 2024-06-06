import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// address Schema
const addressSchema = new Schema ({
     street_address: String,
     town: String,
     county: String,
     postal_code: Number,
     state: String,  
 }, {
   _id: false
 });
 
 // fosteringPreferences Schema
 const fosteringPreferencesSchema = new Schema ([{
        pet_type:  { type: String, default: 'none'},
        life_stage: { type: String, default: 'none'},
        size: { type: String, default: 'none'  }
  }, {
    _id: false 
  }]);

// Main Document Schema for User Profile
const usersProfilesSchema = new Schema({
   firebaseUid: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      // required: true,
    },
    shelter : {
        type : Boolean,
        default: false,
        // required: true,
    },
    shelter_name : {
      type : String,
      default: 'none',
  },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function(v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: props => `${props.value} is not a valid email address!`
      },
      unique: true
    },
    phone: {
      type: String,
      // validate: {
      //   validator: function(v) {
      //     return /(\d{3})-\d{3}-\d{4}/.test(v);
      //   },
      //   message: props => `${props.value} is not a valid phone number!`
      // }
    },

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