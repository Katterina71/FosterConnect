import { useContext, useState, useEffect, createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth} from '../firebase/firebase'; // Ensure this path is correct

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Firebase authentication instance

    function signup(email, password) {
        console.log('New user added')
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
      }
    
    function logout() {
        return auth.signOut()
      }
    
    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
      }
    
    function updateEmail(email) {
        return currentUser.updateEmail(email)
      }
    
    function updatePassword(password) {
        return currentUser.updatePassword(password)
      }
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe; // Cleanup subscription on unmount
    }, []);

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        loading // Added smth
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
