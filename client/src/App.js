import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './componenets/SignUp';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './componenets/Login';
import Home from './componenets/Home';
import Job from './componenets/forms/Job';
// import JobData from './componenets/forms/JobData';
// import Navbar from './componenets/navbar/Navbar';
import JobCard from './componenets/forms/JobCard';
import Navbar1 from './componenets/navbar/Navbar1';
import UserDetails from './componenets/navbar/UserDetails';

import JobEditForm from './componenets/forms/JobEditForm';
import Me from './componenets/forms/Me';
import UserDash from './componenets/forms/UserDash';
import LandingPage from './componenets/landing/LandingPage';
import ForgotPassword from './componenets/forgot/ForgotPassword';
import UserDash2 from './componenets/forms/UserDash2';
import LineChart from './componenets/navbar/LineChart';
// import NavBar3 from './componenets/navbaralternate/Navbar3';
// import UserDashboard from './componenets/navbar/UserDashboard';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/register' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/job' element={<Job />}></Route>
          <Route path='/userdash' element={<UserDash />}></Route>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
          <Route path='/me' element={<Me />}></Route>
          <Route path='/je' element={<JobEditForm />}></Route>
          <Route path='/nav' element={<Navbar1 />}></Route>
          <Route path='/det' element={<UserDetails />}></Route>
          <Route path='/jc' element={<JobCard />}></Route>
          <Route path='/userdash2' element={<UserDash2 />}></Route>
          <Route path='/LineChart' element={<LineChart />}></Route>
          {/* <Route path='/anav' element={<NavBar3 />}></Route> */}
          {/* <Route path='/dashboard' element={<UserDashboard />}></Route> */}
          {/* <Route path='/jobdata' element={<JobData submittedData={submittedData} />} />  */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
