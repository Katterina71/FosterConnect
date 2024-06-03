//To create a route that is only accessible to authenticated users. If a user is not authenticated, it redirects them to the login page
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  // Check if currentUser exists; if not, redirect to the login page
  return currentUser ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
