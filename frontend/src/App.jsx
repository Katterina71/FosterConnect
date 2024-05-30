import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import SignUp from './components/register/SignUp';


const App = () => {
  return (
    <AuthProvider>
        <SignUp />
    </AuthProvider>
  );
};

export default App;
