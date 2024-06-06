import { useState } from 'react';
import { BASE_URL } from '../services/endpointsDB';
import { useAuth } from '../context/AuthContext';

export default function useDeleteUser() {
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState(null);
    const {currentUser} = useAuth()

    const deleteUser = async () => {
        setIsDeleting(true);
        setError(null);

    try {
        let response= await fetch(`${BASE_URL}/${currentUser.uid}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
           })
    
         if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            console.log('User profile remove successfully');

        } catch (error) {
            // Handle errors here
            console.error('Failed to delete user:', error);
            setError(error.response ? error.response.data : error.message);
        }
    } 

    return { deleteUser, isDeleting, error };
}


