import mongoose from 'mongoose'

const Schema = mongoose.Schema;

// Main Document Schema for Pet Profile
const petsProfilesSchema = new Schema ({
    user_id: {
        type: Schema.Types.ObjectId, 
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
          type: Number,
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
        required: true  
      },
    created_at: {
        type: Date,
        default: Date.now // Sets default value to the current date and time
      }
})

const PetsProfiles = mongoose.model('pets-profiles', petsProfilesSchema )
export default PetsProfiles