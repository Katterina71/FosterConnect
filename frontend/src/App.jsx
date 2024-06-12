
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
import Finder from './pages/Finder';
import AboutFosterConnect from './pages/AboutFosterConnect';
import WhoIsFoster from './pages/WhoIsFoster';
import PolicyPage from './pages/PolicyPage';
import ShelterPets from './pages/ShelterPets';


const App = () => {
  return (
    
    <Router>
        <AuthProvider>  
            <Routes>
              <Route path="/" exact element={<Layout title={'Welcome to Fosters Connect - Connecting Shelters and Fosters'}><Main/></Layout>} />
              <Route path="/profile" element={<Layout title={'Your Profile - Manage Your Foster Preferences and Details'}><PrivateRoute><Profile /></PrivateRoute></Layout>} />

              <Route path="/create-profile" element={<Layout title={'Your Profile - Manage Your Foster Preferences and Details'}><PrivateRoute><FormProvider><CreateProfile /></FormProvider></PrivateRoute></Layout>} />
              <Route path="/update-profile" element={<Layout title={'Update Your Profile - Keep Your Information Current'}><PrivateRoute><FormProvider><UpdateProfile /></FormProvider></PrivateRoute></Layout>} />

              <Route path="/dashboard" element={<Layout title={'Dashboard - Overview of Your Foster Activities'}><PrivateRoute><FormProvider><Dashboard /></FormProvider></PrivateRoute></Layout>} />

              
              <Route path="/finder" element={<Layout title={'Find a Shelter - Search for Pets in Need of Temporary Homes'}><Finder/></Layout>} />
              <Route path="/shelter-pets" element={<Layout title={'Shelter Pets - View Pets Available for Fostering'}><FormProvider><ShelterPets /></FormProvider></Layout>} />

              <Route path="/about" element={<Layout title={'About Fosters Connect - Learn More About Our Mission'}><AboutFosterConnect /></Layout>} />
              <Route path="/who-is-foster" element={<Layout title={'Who is a Foster? - Understanding the Role of a Foster'}><WhoIsFoster /></Layout>} />
              <Route path="/website-policy" element={<Layout title={'Website Policy - Our Terms and Conditions'}><PolicyPage /></Layout>} />

              <Route path="/change-password" element={<Layout title={'Change Password - Secure Your Account'}><PrivateRoute><ChangePassword /></PrivateRoute></Layout>} />
              <Route path="/signup" element={<Layout title={'Sign Up - Join Fosters Connect Today'}><SignUp/></Layout>} />
              <Route path="/login" element = {<Layout title={'Log In - Access Your Fosters Connect Account'}><Login/></Layout>} />
              <Route path="/forgot-password" element ={<Layout title={'Forgot Password - Recover Your Account Access'}><ForgotPassword/></Layout>}/>
            </Routes>
       </AuthProvider>
    </Router>
  );
};

export default App;
