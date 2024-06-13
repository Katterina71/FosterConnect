import { useState } from 'react';
import { BASE_URL } from '../services/endpointsDB';
import { useAuth } from '../context/AuthContext';


export default function useUserProfile() {
    const [error, setError] = useState(null);
  
    const createNewUserProfile = async (newUser) => {
        try {
            console.log('Creating new user profile with data:', JSON.stringify(newUser));
            let response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });
                   
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let data = await response.json();   
            console.log('User profile creation successful:', data);
            return data;
        } catch (error) {
            console.error('Failed to create user profile', error);
            setError(error.response ? error.response.data : error.message);
            throw error; // Rethrow the error if you want to handle it in the component
        }
    };

    const getUserProfile = async (user) => {
        try {
            let response= await fetch(BASE_URL+'/'+user.uid, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
               })
        
             if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
               let  data= await response.json();   
                console.log('Success:', data)
                return data
            
        } catch (error) {
            console.error('Login error', error);
            setError(error.response ? error.response.data : error.message);
            throw error; // Rethrow the error if you want to handle it in the component 
        }
    }

    

    const getUserInfo = async (uid) => {
          try {
            let response= await fetch(`${BASE_URL}/${uid}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
               })
        
             if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
               let  data= await response.json();   
                console.log('Success:', data);
               return data 

          } catch (error) {
            console.error('Fetch user data error', error);
            setError(error.response ? error.response.data : error.message);
            throw error; // Rethrow the error if you want to handle it in the component 
          }
        }
    
     const getAllShelter = async () => {
        try {
            let response= await fetch(`${BASE_URL}/shelters`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                } 
            })
        
             if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
               let  data= await response.json();   
               return data; 
        } catch (error) {
            console.error('Could not get shelters info', error);
        }      
  }
        
    

    // Make sure to return an object with properties
    return { createNewUserProfile, getUserProfile, getUserInfo, getAllShelter, error };
}

