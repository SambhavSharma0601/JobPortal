import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Job from './Job';
import JobEditForm from './JobEditForm';
import Navbar1 from '../navbar/Navbar1';
import JobData from './JobData';
import { useLocation } from 'react-router-dom';

const UserDash = () => {
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [isMeSectionOpen, setIsMeSectionOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);
  const [editingJobId, setEditingJobId] = useState(null);
  const [user, setUser] = useState(null);


  const [formData, setFormData] = useState({
    title: '',
    description: '',
    requirements: '',
    applicationInstructions: '',
    companyName: '',
    location: '',
    salaryRange: '',
    employmentType: '',
    industry: '',
    companyDescription: '',
    contactEmail: '',
    contactPhone: '',
    applicationDeadline: '',
  });

  const location = useLocation();
  const userName = location.state && location.state.userName;

  const openCreatePost = () => {
    setIsCreatePostOpen(true);
  };

  const closeCreatePost = () => {
    setIsCreatePostOpen(false);
  };

  const openMeSection = () => {
    console.log('Me section clicked');
    setIsMeSectionOpen(true);
  };

  const closeMeSection = () => {
    setIsMeSectionOpen(false);
  };

  const updateSubmittedData = (data) => {
    setSubmittedData([...submittedData, data]);
  };

  const handleCancelEdit = () => {
    setEditingJobId(null);
  };

  const fetchSubmittedData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/jobs');
      setSubmittedData(response.data);
    } catch (error) {
      console.error('Error fetching submitted data', error);
    }
  };

  useEffect(() => {
    fetchSubmittedData();
  }, []);

  const handleEditJob = (jobId) => {
    setEditingJobId(jobId);
  };

  const handleUpdateJob = async (updatedJob) => {
    try {
      
      if (updatedJob._id) {
        await axios.put(`http://localhost:3001/jobs/${updatedJob._id}`, updatedJob);
        setSubmittedData((prevData) =>
          prevData.map((job) => (job._id === updatedJob._id ? updatedJob : job))
        );
        setEditingJobId(null);
      } else {
        console.error('Error updating job: _id is undefined');
      }
    } catch (error) {
      console.error('Error updating job', error);
    }
  };
  

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');  
    console.log('Token:', token);
    
    if (!token) {
      return; 
    }

    axios.get('http://localhost:3001/me', {
      headers: {
        Authorization: token,
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


const handleDeleteJob = async (deletedJobId) => {
  try {
      // Update the state by filtering out the deleted job
      setSubmittedData((prevData) => prevData.filter((job) => job._id !== deletedJobId));
      window.location.reload();
  } catch (error) {
      console.error('Error updating state after deleting job:', error);
  }
};

  return (
    <div className='bg-slate-200 h-full '>
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
      {/* <h1>welcome user</h1> */}
      {userName && <h1 className='pt-5 flex justify-center'>Welcome, {userName}!</h1>}
      <div className="relative">
        {isCreatePostOpen && <Job onClose={closeCreatePost} updateSubmittedData={updateSubmittedData} />}
        <div
          className={`flex items-center justify-center absolute right-8  text-center h-[50px] w-[150px] bg-gray rounded-3xl cursor-pointer transition-all duration-300`}
          onClick={openCreatePost}
        >
          <div className='bg-blue-400 p-2 rounded-full border-4'>Create a Post</div>
          <div>
            {/* <ion-icon name="code-slash-outline"></ion-icon> */}
          </div>
        </div>
      </div>
      <JobData
        submittedData={submittedData}
        onEditJob={handleEditJob}
        editingJobId={editingJobId}
        onDeleteJob={handleDeleteJob}
      />
{editingJobId && (
  <JobEditForm
    formData={{ ...formData, _id: editingJobId }}  // Pass _id to formData
    setFormData={setFormData}
    onUpdateJob={handleUpdateJob}
    onCancelEdit={handleCancelEdit}
  />
)}


    </div>
  );
};

export default UserDash;
