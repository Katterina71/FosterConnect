import { useState } from 'react';
import { BASE_PETS_URL } from '../services/endpointsDB';
import { useAuth } from '../context/AuthContext';

export default function usePetsProfile() {
    const [error, setError] = useState(null);
    const {currentUser} = useAuth()

    const getPetsProfiles = async () => {
        setError(null);

    try {
        let response= await fetch(`${BASE_PETS_URL}/${currentUser.uid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
           })
    
         if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            let  data = await response.json();   
            console.log('Get success:', data);
            return data
  
        } catch (error) {
            // Handle errors here
            console.error('Failed to get pets profiles', error);
            setError(error.response ? error.response.data : error.message);
        }
    } 

    const postPetProfile = async(petData) => {
        console.log('Add pet profile frontend')
        setError(null);
        try {
            let response= await fetch(`${BASE_PETS_URL}/${currentUser.uid}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json' },
                body: JSON.stringify(petData)
            })
        
            if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
            }

            let result = await response.json();
            console.log('Post success:', result);
            return result;
            
        } catch (error) {
             // Handle errors here
             console.error('Failed to get pets profiles', error);
             setError(error.response ? error.response.data : error.message);
        }
    }

    const removePetProfile = async(id) => {
        console.log('Remove pet profile frontend')
        setError(null);
        try {
        
            let response= await fetch(`${BASE_PETS_URL}/${id}`, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json' },
            })
        
            if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
            }
            console.log(`Pet's profile was removed`);       
        } catch (error) {
            // Handle errors here
            console.error('Failed to get pets profiles', error);
            setError(error.response ? error.response.data : error.message);  
        }
    }

    const getAllPetsProfiles = async() =>{
        console.log('Get all pets profiles frontend')
        setError(null);
        try {
            let response= await fetch(`${BASE_PETS_URL}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
               })
        
             if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
                let  data = await response.json();   
                console.log('Get success:', data);
                return data
            
        } catch (error) {
                // Handle errors here
                console.error('Failed to get pets profiles', error);
                setError(error.response ? error.response.data : error.message);    
        }
    }

    return { getPetsProfiles, postPetProfile, removePetProfile, getAllPetsProfiles, error };
}
