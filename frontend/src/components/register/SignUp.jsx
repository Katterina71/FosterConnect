import React, {useRef, useState} from 'react'
import { useAuth } from '../../context/AuthContext';


function SignUp() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {signup} = useAuth()

  //Validation and Handle errors
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

 async function handleClick(e) {
  e.preventDefault()
  console.log(emailRef.current.value, passwordRef.current.value) // Debugging

  if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    return setError('Passwords do not match');
}
  try {
        setError('');
        setLoading(true);
        await signup(emailRef.current.value, passwordRef.current.value);
  } catch (error) {
    setError('Failed to create an account');
  }
    setLoading(false);
  }


  return (
    <div>
      <input 
        required
        id="email"
        label="Email Address"
        name="email"
        type='text'
        ref = {emailRef}
        />
      <input 
        required
        name="password"
        label="Password"
        type="password"
        id="password"
        ref = {passwordRef}
      />
      <input 
        required
        name="password-confirm"
        label="Password Confirmation"
        type="password"
        id="password-confirm"
        ref = {passwordConfirmRef}
      />
      <button onClick = {(e) => handleClick(e)}>Submit</button>
    </div>
  )
}

export default SignUp
