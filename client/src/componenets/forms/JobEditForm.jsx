// import React from 'react';

// const JobEditForm = ({ formData, setFormData, onUpdateJob, onCancelEdit }) => {
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleUpdate = async () => {
    
//     if (formData._id) {
//       await onUpdateJob(formData);
  
//     } else {
//       console.error('Error updating job: _id is undefined');
//     }
//   };

//   return (
//     <div className="job-container bg-gray-200 p-6 rounded-lg shadow-md w-[80%] mx-auto my-10">
//       <div className="flex justify-end">
//         <button
//           onClick={onCancelEdit}
//           className="text-xl cursor-pointer focus:outline-none"
//         >
//           <ion-icon name="close-circle-outline"></ion-icon>
//         </button>
//       </div>
//       <form className="space-y-4">
//         <div>
//           <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//             Title:
//           </label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={formData.title || ''}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//             Description:
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description || ''}
//             onChange={handleChange}
//             rows="4"
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
//             Requirements:
//           </label>
//           <textarea
//             id="requirements"
//             name="requirements"
//             value={formData.requirements || ''}
//             onChange={handleChange}
//             rows="4"
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="applicationInstructions" className="block text-sm font-medium text-gray-700">
//             Application Instructions:
//           </label>
//           <textarea
//             id="applicationInstructions"
//             name="applicationInstructions"
//             value={formData.applicationInstructions || ''}
//             onChange={handleChange}
//             rows="4"
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
//             Company Name:
//           </label>
//           <input
//             type="text"
//             id="companyName"
//             name="companyName"
//             value={formData.companyName || ''}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="location" className="block text-sm font-medium text-gray-700">
//             Location:
//           </label>
//           <input
//             type="text"
//             id="location"
//             name="location"
//             value={formData.location || ''}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="salaryRange" className="block text-sm font-medium text-gray-700">
//             Salary Range:
//           </label>
//           <input
//             type="text"
//             id="salaryRange"
//             name="salaryRange"
//             value={formData.salaryRange || ''}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700">
//             Employment Type:
//           </label>
//           <input
//             type="text"
//             id="employmentType"
//             name="employmentType"
//             value={formData.employmentType || ''}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
//             Industry:
//           </label>
//           <input
//             type="text"
//             id="industry"
//             name="industry"
//             value={formData.industry || ''}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="companyDescription" className="block text-sm font-medium text-gray-700">
//             Company Description:
//           </label>
//           <textarea
//             id="companyDescription"
//             name="companyDescription"
//             value={formData.companyDescription || ''}
//             onChange={handleChange}
//             rows="4"
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
//             Contact Email:
//           </label>
//           <input
//             type="text"
//             id="contactEmail"
//             name="contactEmail"
//             value={formData.contactEmail || ''}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700">
//             Contact Phone:
//           </label>
//           <input
//             type="text"
//             id="contactPhone"
//             name="contactPhone"
//             value={formData.contactPhone || ''}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="applicationDeadline" className="block text-sm font-medium text-gray-700">
//             Application Deadline:
//           </label>
//           <input
//             type="text"
//             id="applicationDeadline"
//             name="applicationDeadline"
//             value={formData.applicationDeadline || ''}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>


//         <button
//           type="button"
//           onClick={handleUpdate}
//           className="w-[200px] bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
//         >
//           Update
//         </button>
//       </form>
//     </div>
//   );
// };

// export default JobEditForm;
import React, { useState } from 'react';

const JobEditForm = ({ formData, setFormData, onUpdateJob, onCancelEdit }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Example validation: Check if title is not empty
    if (!formData.title || formData.title.trim() === '') {
      newErrors.title = 'Title is required';
    }

    // Add more validation rules for other fields

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdate = async () => {
    // Validate the form before updating
    if (validateForm()) {
      if (formData._id) {
        await onUpdateJob(formData);
      } else {
        console.error('Error updating job: _id is undefined');
      }
    }
  };

  return (
    <div className="job-container bg-red-400 p-6 rounded-lg shadow-md w-[40%] mx-auto my-10 ">
      <div className="flex justify-end">
        <button
          onClick={onCancelEdit}
          className="text-xl cursor-pointer focus:outline-none"
        >
          <ion-icon name="close-circle-outline"></ion-icon>
        </button>
      </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title || ''}
            onChange={handleChange}
            className={`mt-1 p-2 border rounded-md w-full ${errors.title ? 'border-red-500' : ''}`}
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description || ''}
            onChange={handleChange}
            rows="4"
            className={`mt-1 p-2 border rounded-md w-full ${errors.description ? 'border-red-500' : ''}`}
          />
          {errors.description && <p className="text-red-500">{errors.description}</p>}
        </div>

        <div>
          <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
            Requirements:
          </label>
          <textarea
            id="requirements"
            name="requirements"
            value={formData.requirements || ''}
            onChange={handleChange}
            rows="4"
            className={`mt-1 p-2 border rounded-md w-full ${errors.requirements ? 'border-red-500' : ''}`}
          />
          {errors.requirements && <p className="text-red-500">{errors.requirements}</p>}
        </div>
{/* 
        <div>
          <label htmlFor="applicationInstructions" className="block text-sm font-medium text-gray-700">
            Application Instructions:
          </label>
          <textarea
            id="applicationInstructions"
            name="applicationInstructions"
            value={formData.applicationInstructions || ''}
            onChange={handleChange}
            rows="4"
            className={`mt-1 p-2 border rounded-md w-full ${errors.applicationInstructions ? 'border-red-500' : ''}`}
          />
          {errors.applicationInstructions && <p className="text-red-500">{errors.applicationInstructions}</p>}
        </div> */}
        <div className=' grid grid-cols-2 gap-7'>
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
            Company Name:
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName || ''}
            onChange={handleChange}
            className={`mt-1 p-2 border rounded-md w-full ${errors.companyName ? 'border-red-500' : ''}`}
          />
          {errors.companyName && <p className="text-red-500">{errors.companyName}</p>}
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location || ''}
            onChange={handleChange}
            className={`mt-1 p-2 border rounded-md w-full ${errors.location ? 'border-red-500' : ''}`}
          />
          {errors.location && <p className="text-red-500">{errors.location}</p>}
        </div>

        <div>
          <label htmlFor="salaryRange" className="block text-sm font-medium text-gray-700">
            Salary Range:
          </label>
          <input
            type="text"
            id="salaryRange"
            name="salaryRange"
            value={formData.salaryRange || ''}
            onChange={handleChange}
            className={`mt-1 p-2 border rounded-md w-full ${errors.salaryRange ? 'border-red-500' : ''}`}
          />
          {errors.salaryRange && <p className="text-red-500">{errors.salaryRange}</p>}
        </div>

        <div>
          <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700">
            Employment Type:
          </label>
          <input
            type="text"
            id="employmentType"
            name="employmentType"
            value={formData.employmentType || ''}
            onChange={handleChange}
            className={`mt-1 p-2 border rounded-md w-full ${errors.employmentType ? 'border-red-500' : ''}`}
          />
          {errors.employmentType && <p className="text-red-500">{errors.employmentType}</p>}
        </div>

        {/* <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
            Industry:
          </label>
          <input
            type="text"
            id="industry"
            name="industry"
            value={formData.industry || ''}
            onChange={handleChange}
            className={`mt-1 p-2 border rounded-md w-full ${errors.industry ? 'border-red-500' : ''}`}
          />
          {errors.industry && <p className="text-red-500">{errors.industry}</p>}
        </div> */}

        {/* <div>
          <label htmlFor="companyDescription" className="block text-sm font-medium text-gray-700">
            Company Description:
          </label>
          <textarea
            id="companyDescription"
            name="companyDescription"
            value={formData.companyDescription || ''}
            onChange={handleChange}
            rows="4"
            className={`mt-1 p-2 border rounded-md w-full ${errors.companyDescription ? 'border-red-500' : ''}`}
          />
          {errors.companyDescription && <p className="text-red-500">{errors.companyDescription}</p>}
        </div> */}

        {/* <div>
          <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
            Contact Email:
          </label>
          <input
            type="text"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail || ''}
            onChange={handleChange}
            className={`mt-1 p-2 border rounded-md w-full ${errors.contactEmail ? 'border-red-500' : ''}`}
          />
          {errors.contactEmail && <p className="text-red-500">{errors.contactEmail}</p>}
        </div>

        <div>
          <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700">
            Contact Phone:
          </label>
          <input
            type="text"
            id="contactPhone"
            name="contactPhone"
            value={formData.contactPhone || ''}
            onChange={handleChange}
            className={`mt-1 p-2 border rounded-md w-full ${errors.contactPhone ? 'border-red-500' : ''}`}
          />
          {errors.contactPhone && <p className="text-red-500">{errors.contactPhone}</p>}
        </div> */}

        <div>
          <label htmlFor="applicationDeadline" className="block text-sm font-medium text-gray-700">
            Application Deadline:
          </label>
          <input
            type="text"
            id="applicationDeadline"
            name="applicationDeadline"
            value={formData.applicationDeadline || ''}
            onChange={handleChange}
            className={`mt-1 p-2 border rounded-md w-full ${errors.applicationDeadline ? 'border-red-500' : ''}`}
          />
          {errors.applicationDeadline && <p className="text-red-500">{errors.applicationDeadline}</p>}
        </div>
        </div>


        <button
          type="button"
          onClick={handleUpdate}
          className="w-[200px] bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default JobEditForm;
