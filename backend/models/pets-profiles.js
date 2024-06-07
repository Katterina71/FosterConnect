import mongoose from 'mongoose'

const Schema = mongoose.Schema;

// Main Document Schema for Pet Profile
const petsProfilesSchema = new Schema ({
    shelter_id: {
        type: String,  // Use String type for Firebase UIDs
        ref: 'users-profiles',  
        required: true  
      },
    type: {
        type: String,
        required: true
      },
    name: {
        type: String,
        required: true 
      },
    img: {
        type: String,
        required: true
      },
    age_month: {
          type: String,
      },
    life_stage: {
        type: String,
        required: true
      },
    size: {
        type: String,
        required: true
      },
    gender: {
        type: String,
        required: true
      },
    description: {
        type: String,
      },
    created_at: {
        type: Date,
        default: Date.now // Sets default value to the current date and time
      }
})

const PetsProfiles = mongoose.model('pets-profiles', petsProfilesSchema )
export default PetsProfiles