import { useState } from 'react';
import { BASE_URL } from '../services/endpointsDB';
import { useAuth } from '../context/AuthContext';


export default function useUserProfile() {
    const [error, setError] = useState(null);
    const {currentUser} = useAuth()
  
    return (,error)
}
