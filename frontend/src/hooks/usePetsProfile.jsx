import { useState } from 'react';
import { BASE_PETS_URL } from '../services/endpointsDB';
import { useAuth } from '../context/AuthContext';

export default function usePetsProfile() {
    const [petArray, setPetArray] = useState(null);
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

            let  petArray = await response.json();   
            console.log('Get success:', petArray);
            return setPetArray();
  
        } catch (error) {
            // Handle errors here
            console.error('Failed to get pets profiles', error);
            setError(error.response ? error.response.data : error.message);
        }
    } 

    return { getPetsProfiles, petArray, error };
}
