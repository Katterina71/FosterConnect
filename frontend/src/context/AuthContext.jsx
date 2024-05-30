import React, { useContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth as firebaseAuth } from '../firebase/firebase'; 


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const auth = getAuth(firebaseAuth);  // Get auth instance from Firebase initialization

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        });
        return unsubscribe;  // This is the cleanup function
    }, [auth]); 

    const value = {
        currentUser,
        signup
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

  
