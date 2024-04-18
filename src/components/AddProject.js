import React from 'react'

function AddProject() {
  return (
    <div className='border-black border-8 rounded-md w-1/2 m-auto pt-2 font-serif bg-green-100'>
          <h2 className='font-bold text-xl text-center mb-4'>Add New Project</h2>
          <input
            type='text'
            name='name'
            value={newProjectData.name}
            onChange={handleInputChange}
            placeholder='Project Name'
            className='w-full p-2 mb-2'
          />
          <input
            type='date'
            name='startDate'
            value={newProjectData.startDate}
            onChange={handleInputChange}
            placeholder='Start Date'
            className='w-full p-2 mb-2'
          />
          <input
            type='date'
            name='endDate'
            value={newProjectData.endDate}
            onChange={handleInputChange}
            placeholder='End Date'
            className='w-full p-2 mb-2'
          />
          <textarea
            name='details'
            value={newProjectData.details}
            onChange={handleInputChange}
            placeholder='Project Details'
            className='w-full p-2 mb-2'
          />
          <button type='button' className='bg-blue-600 text-white py-2 px-4 rounded-lg mr-2' onClick={handleAddProject}>Add Project</button>
        </div>
  )
}

export default AddProject