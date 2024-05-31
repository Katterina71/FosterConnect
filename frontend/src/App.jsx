import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import SignUp from './components/forms/SignUp';
import Profile  from './pages/Profile';
import Login from './components/forms/Login';
import ForgotPassword from './components/forms/ForgotPassword';
import PrivateRoute from './components/layouts/PrivateRoute';
import UpdateProfile from './components/forms/UpdateProfile';
import Layout from './components/layouts/Layout';
import Main from './pages/Main'





const App = () => {
  return (
    
    <Router>
        <AuthProvider>  
            <Routes>
              <Route path="/" exact element={<Layout><Main/></Layout>} />
              <Route path="/profile" element={<Layout><PrivateRoute><Profile /></PrivateRoute></Layout>} />
              <Route path="/update-profile" element={<Layout><PrivateRoute><UpdateProfile /></PrivateRoute></Layout>} />
              {/* <Route exact path="/" element={<Dashboard/>} />
              <Route path="/update-profile" element={<UpdateProfile/>} /> */}
              <Route path="/signup" element={<Layout><SignUp/></Layout>} />
              <Route path="/login" element = {<Layout><Login/></Layout>} />
              <Route path="/forgot-password" element ={<Layout><ForgotPassword/></Layout>}/>
            </Routes>
       </AuthProvider>
    </Router>
  );
};

export default App;
