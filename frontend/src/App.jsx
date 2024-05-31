import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import SignUp from './components/register/SignUp';
import Dashboard  from './components/Dashboard';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
// import PrivateRoute from './components/PrivateRoute';


const App = () => {
  return (
    <Router>
        <AuthProvider>
            <Routes>
              <Route exact path="/" element={<Dashboard/>} />
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/login" element = {<Login/>} />
              <Route path="/forgot-password" element ={<ForgotPassword/>}/>
            </Routes>
       </AuthProvider>
    </Router>
  );
};

export default App;
