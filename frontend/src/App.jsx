import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import SignUp from './components/register/SignUp';
import Dashboard  from './components/Dashboard';
import Login from './components/Login';


const App = () => {
  return (
    <Router>
        <AuthProvider>
            <Routes>
              <Route exact path="/" element={<Dashboard/>} />
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/login" element = {<Login/>} />
            </Routes>
       </AuthProvider>
    </Router>
  );
};

export default App;
