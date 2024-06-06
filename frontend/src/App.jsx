
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import SignUp from './components/forms/register_forms/SignUp';
import Profile  from './components/dashboard/foster/FosterDashboard';
import Login from './components/forms/register_forms/Login';
import ForgotPassword from './components/forms/register_forms/ForgotPassword';
import PrivateRoute from './components/layouts/PrivateRoute';
import ChangePassword from './components/forms/register_forms/ChangePassword';
import Layout from './components/layouts/Layout';
import Main from './pages/Main'
import CreateProfile from './pages/CreateProfile';
import Dashboard from './pages/Dashboard';
import { FormProvider } from './context/FormContext';
import UpdateProfile from './pages/UpdateProfile';


const App = () => {
  return (
    
    <Router>
        <AuthProvider>  
            <Routes>
              <Route path="/" exact element={<Layout><Main/></Layout>} />
              <Route path="/profile" element={<Layout><PrivateRoute><Profile /></PrivateRoute></Layout>} />

              {/* <Route path="/create-profile" element={<Layout><PrivateRoute><CreateProfile /></PrivateRoute></Layout>} /> */}
              <Route path="/create-profile" element={<Layout><PrivateRoute><FormProvider><CreateProfile /></FormProvider></PrivateRoute></Layout>} />
              <Route path="/update-profile" element={<Layout><PrivateRoute><FormProvider><UpdateProfile /></FormProvider></PrivateRoute></Layout>} />
              {/* <Route path="/shelter-dashboard" element={<Layout><PrivateRoute><ShelterProfile /></PrivateRoute></Layout>} />
              <Route path="/foster-dashboard" element={<Layout><PrivateRoute><FosterProfile /></PrivateRoute></Layout>} /> */}

              <Route path="/dashboard" element={<Layout><PrivateRoute><FormProvider><Dashboard /></FormProvider></PrivateRoute></Layout>} />

              <Route path="/change-password" element={<Layout><PrivateRoute><ChangePassword /></PrivateRoute></Layout>} />


              <Route path="/signup" element={<Layout><SignUp/></Layout>} />
              <Route path="/login" element = {<Layout><Login/></Layout>} />
              <Route path="/forgot-password" element ={<Layout><ForgotPassword/></Layout>}/>
            </Routes>
       </AuthProvider>
    </Router>
  );
};

export default App;
