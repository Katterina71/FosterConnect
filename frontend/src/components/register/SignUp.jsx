import React, {useRef, useState} from 'react'
import { useAuth } from '../../context/AuthContext';


function SignUp() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const {signup} = useAuth()

 async function handleClick(e) {
  e.preventDefault()
  console.log('hello')
  console.log(emailRef.current.value, passwordRef.current.value)
  return await signup(emailRef.current.value, passwordRef.current.value)
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
        name="password"
        label="Password"
        type="password"
        id="password"
        ref = {passwordRef}
      />
      <button onClick = {(e) => handleClick(e)}>Submit</button>
    </div>
  )
}

export default SignUp
