import { useContext, useState, useEffect, createContext } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, deleteUser, updatePassword} from 'firebase/auth';
import {auth} from '../firebase/firebase'; // Ensure this path is correct
import useUserProfile from '../hooks/useUserProfile';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { createNewUserProfile, getUserProfile, getUserInfo } = useUserProfile();

    
    // Firebase authentication instance
    
    async function signup(email, password, navigate) {    
        console.log('New user added')
        try {
             const userCredential = await createUserWithEmailAndPassword(auth, email, password) 
                // User is created successfully, now userCredential.user contains the newly created user
                const user = userCredential.user;
        
                //Add new user in Mongo DB
                const newUser = {
                       firebaseUid: user.uid,
                       email: user.email 
                   };
                   
                await createNewUserProfile(newUser)

                //If signup is successful, navigate to the create-profile page
                navigate('/create-profile');

        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
             // Handle errors more specifically based on errorCode
            if (errorCode === 'auth/email-already-in-use') {
                console.error('Email already in use. Please use a different email or log in.');
                throw new Error('This email is already in use.');
            } else if (errorCode === 'auth/invalid-email') {
                console.error('The email address is not valid.');
            } else if (errorCode === 'auth/weak-password') {
                console.error('The password is too weak.');
            } else {
                console.error('Error adding user:', errorCode, errorMessage);
            }
            throw new Error(errorMessage); // Propagate error up if you need to handle it outside
        }
    }

   async function login(email, password, navigate) {
        console.log('Login:');
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password)
          const user = userCredential.user;

          await getUserProfile(user);
          // if user did not complete create account and did not choose foster or shelter profile
          navigate('/dashboard')
           
         return user;

        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Login error:', errorCode, errorMessage);
            throw new Error(errorMessage); // Propagate error up if you need to handle it outside
        }

      }

      async function loginProfile(currentUser, navigate) {
        console.log('Login profile:');
        try {
           const data = await getUserInfo(currentUser.uid)
           if (!data.shelter) {
            navigate('/create-profile')
           }
           return data;
        } catch (error) {
            throw new Error(error.code);
        }
      }

    function logout() {
        return signOut(auth)
      }
    
    async function resetPassword(email) {
        console.log('Reset Password')
        try {
            return await sendPasswordResetEmail(auth, email)
        
        } catch (error) {
          throw new Error(error.code);
        } 
      }
    

    function changeUserPassword(currentUser, newPassword) {
        return updatePassword(currentUser, newPassword);
    }
    
   async function removeAccount(){
        try {
            console.log('Removing profile: ')
            const user = auth.currentUser
            await deleteUser(user);
            console.log('User deleted');
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            // Handle errors here
            console.error('Login error:', errorCode, errorMessage);
        }
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
        loginProfile,
        signup,
        login,
        logout,
        resetPassword,
        changeUserPassword,
        removeAccount
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
