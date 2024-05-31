import { useContext, useState, useEffect, createContext } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateEmail, updatePassword} from 'firebase/auth';
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
        console.log('Login:');
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          return user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // Handle errors here
          console.error('Login error:', errorCode, errorMessage);
        });
      }
    
    function logout() {
        return signOut(auth)
      }
    
    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email)
      }
    
      function changeUserEmail(newEmail) {
        const user = auth.currentUser;  // Get the current user
        console.log('New Email: '+ newEmail);
        if (user) {
            return updateEmail(user, newEmail).then(() => {
                console.log('Email updated successfully');
            }).catch((error) => {
                console.error('Error updating email:', error);
            });
        } else {
            console.error('No user logged in');
        }
    }
    
    function changeUserPassword(currentUser, newPassword) {
        return updatePassword(currentUser, newPassword);
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
        changeUserEmail,
        changeUserPassword,
        loading // Added smth
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
