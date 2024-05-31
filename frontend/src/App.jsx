import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import SignUp from './components/forms/SignUp';
import Dashboard  from './components/Dashboard';
import Login from './components/forms/Login';
import ForgotPassword from './components/forms/ForgotPassword';
import PrivateRoute from './components/forms/PrivateRoute';
import UpdateProfile from './components/forms/UpdateProfile';


const App = () => {
  return (
    <Router>
        <AuthProvider>
            <Routes>
              {/* <PrivateRoute exact path="/" element={<Dashboard/>} />
              <PrivateRoute exact path="/update-profile" element={<UpdateProfile/>} /> */}
              <Route exact path="/" element={<Dashboard/>} />
              <Route path="/update-profile" element={<UpdateProfile/>} />
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/login" element = {<Login/>} />
              <Route path="/forgot-password" element ={<ForgotPassword/>}/>
            </Routes>
       </AuthProvider>
    </Router>
  );
};

export default App;
