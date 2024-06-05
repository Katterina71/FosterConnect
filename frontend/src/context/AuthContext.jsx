import { useContext, useState, useEffect, createContext } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateEmail, updatePassword} from 'firebase/auth';
import {auth} from '../firebase/firebase'; // Ensure this path is correct
import {BASE_URL} from '../api/endpointsDB'

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // Firebase authentication instance
    
    async function signup(email, password, navigate) {
        
        console.log('New user added')
        try {
             const userCredential = await createUserWithEmailAndPassword(auth, email, password) 
                // User is created successfully, now userCredential.user contains the newly created user
                const user = userCredential.user;

                // console.log('New user uid:', user.uid);  // Debugging Log the UID of the new user
                // console.log('New user email:', user.email);  // Debugging Log the email of the new user
        
                //Add new user in Mongo DB
                const newUser = {
                       firebaseUid: user.uid,
                       email: user.email 
                   };
                   console.log(JSON.stringify(newUser))
                
                   let response= await  fetch(BASE_URL, {
                       method: 'POST',
                       headers: {
                           'Content-Type': 'application/json'
                       },
                       body: JSON.stringify(newUser)
                   })
               
                    if (!response.ok) {
                           throw new Error(`HTTP error! Status: ${response.status}`);
                       }
                    let  data= await  response.json();   
                    console.log('Success:', data)

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
