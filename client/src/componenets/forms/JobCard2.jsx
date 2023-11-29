import React from 'react';

const JobCard2 = ({ job, onEditJob }) => {
  const handleEditClick = () => {
    onEditJob(job._id);
  };


  const handleShareClick = async () => {
    try {
      console.log("button clicked")
      if (navigator.share) {
        await navigator.share({
          title: job.title,
          text: `Check out this job at ${job.companyName}: ${job.title}`,
          url: window.location.href,
        });
      } else {
        throw new Error('Web Share API not supported');
      }
    } catch (error) {
      console.error('Error sharing:', error);
      // Handle error or provide fallback sharing method
    }
  };

  return (
    <div className="group bg-gray-600 p-4 transition-all duration-300 mt-20 lg:p-8 rounded-2xl">
      <div className="mb-3 text-right">
        <button
          onClick={handleEditClick}
          className="text-gray-50 transition-all duration-300 hover:scale-110 hover:text-red-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"></svg>
        </button>
      </div>
      <div className="flex items-center gap-x-2">
        <img
          className="aspect-[2/2] w-16"
          src="https://img.lovepik.com/element/40174/0048.png_1200.png"
          alt=""
        />
        <div>
          <h3 className="text-xl font-bold text-gray-50">{job.companyName}</h3>
          <span className="text-xs text-gray-300">{job.location}</span>
        </div>
      </div>
      <div className="my-4">
        <h3 className="text-2xl font-medium text-gray-200">{job.title}</h3>
        <div className="text-sm font-medium">
          {Array.isArray(job.requirements) &&
            job.requirements.map((requirement, index) => (
              <span key={index} className="m-1 ml-0 inline-block text-blue-500">
                {requirement}
              </span>
            ))}
        </div>
        <div className="mt-2 text-sm text-gray-400">{job.salaryRange}</div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-50">{job.employmentType}</span>
        <div className="flex gap-2">
          <button
            onClick={handleShareClick}
            className="font-medium text-gray-50 bg-gray-600 transition-all duration-300 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center"
          >
            
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"> */}
              
              {/* Add your share icon here */}
            {/* </svg> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zfX77Iogiua7vbR-9g9rGI0KqbrXD-6FHmyZ5ygeMw&s" alt="share" className="h-5 w-5"></img>
          </button>
          <button className="font-medium text-blue-500 bg-red-600 transition-all duration-300 hover:bg-blue-600 text-gray-50 rounded-full w-40 h-10">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard2;
