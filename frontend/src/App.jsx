
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import SignUp from './components/forms/register_forms/SignUp';
import Profile  from './components/dashboard/foster/FosterDashboard';
import Login from './components/forms/register_forms/Login';
import ForgotPassword from './components/forms/register_forms/ForgotPassword';
import PrivateRoute from './components/layouts/PrivateRoute';
import UpdateProfile from './components/forms/register_forms/UpdateProfile';
import Layout from './components/layouts/Layout';
import Main from './pages/Main'
import CreateProfile from './pages/CreateProfile';
import Dashboard from './pages/Dashboard';
import { FormProvider } from './context/FormContext';


const App = () => {
  return (
    
    <Router>
        <AuthProvider>  
            <Routes>
              <Route path="/" exact element={<Layout><Main/></Layout>} />
              <Route path="/profile" element={<Layout><PrivateRoute><Profile /></PrivateRoute></Layout>} />

              {/* <Route path="/create-profile" element={<Layout><PrivateRoute><CreateProfile /></PrivateRoute></Layout>} /> */}
              <Route path="/create-profile" element={<Layout><FormProvider><CreateProfile /></FormProvider></Layout>} />
              
              {/* <Route path="/shelter-dashboard" element={<Layout><PrivateRoute><ShelterProfile /></PrivateRoute></Layout>} />
              <Route path="/foster-dashboard" element={<Layout><PrivateRoute><FosterProfile /></PrivateRoute></Layout>} /> */}

              <Route path="/dashboard" element={<Layout><PrivateRoute><Dashboard /></PrivateRoute></Layout>} />

              <Route path="/update-profile" element={<Layout><PrivateRoute><UpdateProfile /></PrivateRoute></Layout>} />


              <Route path="/signup" element={<Layout><SignUp/></Layout>} />
              <Route path="/login" element = {<Layout><Login/></Layout>} />
              <Route path="/forgot-password" element ={<Layout><ForgotPassword/></Layout>}/>
            </Routes>
       </AuthProvider>
    </Router>
  );
};

export default App;
