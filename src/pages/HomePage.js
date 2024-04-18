import React, { useEffect, useState } from 'react'
import AddProject from '../components/AddProject';

function HomePage() {
  const [projects, setProjects] = useState([]);
  const [newProjectData, setNewProjectData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    details: ''
  });

  useEffect(() => {
    // Fetch project data from the API
    fetch('https://6620ba383bf790e070b06c93.mockapi.io/api/v1/user/1/project')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const handleDelete = (projectId) => {
    // Prompt confirmation before deleting
    const confirmDelete = window.confirm("Are you sure you want to delete this project?");
    if (confirmDelete) {
      // Delete project with given projectId
      fetch(`https://6620ba383bf790e070b06c93.mockapi.io/api/v1/user/1/project/${projectId}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            // If successful, update state to remove the deleted project
            setProjects(projects.filter(project => project.id !== projectId));
          } else {
            console.error('Failed to delete project:', response.statusText);
          }
        })
        .catch(error => console.error('Error deleting project:', error));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProjectData({ ...newProjectData, [name]: value });
  };

  const handleAddProject = () => {
    // Validate input fields
    if (!newProjectData.name || !newProjectData.startDate || !newProjectData.endDate || !newProjectData.details) {
      alert("Please fill in all fields.");
      return;
    }

    // Send POST request to add new project
    fetch('https://6620ba383bf790e070b06c93.mockapi.io/api/v1/user/1/project', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProjectData)
    })
      .then(response => response.json())
      .then(data => {
        // Update state to include the new project
        setProjects([...projects, data]);
        // Clear the form fields
        setNewProjectData({
          name: '',
          startDate: '',
          endDate: '',
          details: ''
        });
      })
      .catch(error => console.error('Error adding project:', error));
  };
  return (
    <div>
      <h1 className='container mx-auto px-4 bg-red-800 h-32'>Dashboard</h1>
      <div>
        <AddProject></AddProject>
        {projects.map(project => (
          <div key={project.id} className='border-black border-8 rounded-md w-1/2 m-auto pt-2 font-serif bg-green-100 mt-4'>
            <h2 className='font-bold text-xl text-center'>Project Title: {project.name}</h2>
            <p className='p-4'>Creation Time: {project.createdAt}</p>
            <p className='p-5'>Details: {project.details}</p>
            <p className='p-5'>Start Date: {project.startDate}</p>
            <p className='p-5'>End Date: {project.endDate}</p>
            <button type='button' className='bg-lime-600 h-8 w-16 rounded-md ml-5'>EDIT</button>
            <button type='button' className='bg-red-600 h-8 w-20 rounded-lg ml-5' onClick={() => handleDelete(project.id)}>DELETE</button>
          </div>
        ))}
      </div>
    </div>
  
  )
}

export default HomePage