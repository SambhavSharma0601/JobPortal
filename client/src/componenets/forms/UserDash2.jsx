import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar1 from '../navbar/Navbar1';
import JobData2 from './JobData2';
import { useLocation } from 'react-router-dom';
import 'animate.css/animate.min.css';


const UserDash2 = () => {
  const [isMeSectionOpen, setIsMeSectionOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);
  const [user, setUser] = useState(null);

  const openMeSection = () => {
    setIsMeSectionOpen(true);
  };

  const closeMeSection = () => {
    setIsMeSectionOpen(false);
  };

  const fetchSubmittedData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/jobs');
      setSubmittedData(response.data);
    } catch (error) {
      console.error('Error fetching submitted data', error);
    }
  };
  const location = useLocation();
  const userName = location.state && location.state.userName;

  useEffect(() => {
    fetchSubmittedData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');  
    console.log('Token:', token);
    
    if (!token) {
      return; 
    }

    axios.get('http://localhost:3001/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log('User data:', response.data);
        if (response.data.success) {
          setUser(response.data.user);
        } else {
          console.error('Error fetching user details:', response.data.message);
        }
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, []);

  return (
    <div className='bg-slate-200'>
      <Navbar1 onMeClick={openMeSection} />
      {isMeSectionOpen && user && (
        <div className="absolute right-8 top-12 bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-600">{user.email}</p>
          <button onClick={closeMeSection} className="text-blue-500 cursor-pointer mt-2">
            Close Me
          </button>
        </div>
      )}
      {userName && <h1 className='text-red-500 text-4xl font-bold absolute inset-x-0 left-0 right-0 text-center animate__animated animate__fadeIn'>Welcome, {userName}!</h1>}
      <JobData2 submittedData={submittedData} />
    </div>
  );
};

export default UserDash2;
