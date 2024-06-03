import { query } from 'express';
import PetsProfile from '../models/pets-profiles.js'


const PetController = {
    getAllPets: async (req, res) => {
        try {
            const pets = await PetsProfile.find({});
            res.status(201).json(pets);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getPetsByTypeAndLocation: async (req,res) => {
        try {
            const data = await PetsProfile.find({type: query.params.type, town: query.params.town})
            res.status(201).json(data)
        } catch (error) {
            
        }
    },

    createPet: async (req, res) => {
        const { shelter_id, type, name, img, age_month, size, gender, description } = req.body;
        try {
            const newPet = new PetsProfile({
                shelter_id,
                type,
                name,
                img,
                age_month,
                size,
                gender,
                description
            });
            await newPet.save();
            res.status(201).json(newPet);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updatePet: async (req, res) => {
        const { id } = req.params; // Assuming the pet ID is sent as a URL parameter
        try {
            const updatedPet = await PetsProfile.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedPet) {
                return res.status(404).json({ message: 'Pet not found' });
            }
            res.json(updatedPet);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deletePet: async (req, res) => {
        const { id } = req.params; // Assuming the pet ID is sent as a URL parameter
        try {
            const deletedPet = await PetsProfile.findByIdAndDelete(id);
            if (!deletedPet) {
                return res.status(404).json({ message: 'Pet not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getAllPetsByShelter: async (req, res) => {
        const { shelterId } = req.params; // Assuming the shelter ID is sent as a URL parameter
        try {
            const pets = await PetsProfile.find({ shelter_id: req.params.shelter_id });
            res.json(pets);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default PetController