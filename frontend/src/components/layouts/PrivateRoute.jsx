//To create a route that is only accessible to authenticated users. If a user is not authenticated, it redirects them to the login page
import React from 'react'
import {Route, Navigate} from 'react-router-dom'
import {useAuth} from '../../context/AuthContext'

function PrivateRoute({children, ...rest}) {

  const {currentUser} = useAuth()  
  return (
   <Route 
      {...rest} 
      element={currentUser ? children : <Navigate to="/login" replace />} 
    />
  )
}

export default PrivateRoute
