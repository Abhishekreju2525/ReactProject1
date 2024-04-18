import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useDispatch } from "react-redux";
import { addNewProject, createProject } from "../store/projectSlice";

function AddProject() {
  const userContext = useContext(UserContext);
  const userId = userContext.userObj.id;
  const dispatch=useDispatch()
  
  const [formData, setFormData] = useState({"userId":userId});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    dispatch(createProject(formData))
  }
  return (
    <div className="w-[90%] p-8 bg-blue-200">
      {userId}
      <form action="" className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="gap-2">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={handleChange} required />
        </div>
        <div className=" gap-2">
          <label htmlFor="details">Details</label>
          <input type="text" name="details" id="details" onChange={handleChange} required />
        </div>
        <div className=" gap-2">
          <label htmlFor="startedAt">Start date</label>
          <input type="date" name="startedAt" id="startedAt" onChange={handleChange} required />
        </div>
        <div className=" gap-2">
          <label htmlFor="endingAt">End date</label>
          <input type="date" name="endingAt" id="endingAt" onChange={handleChange} required />
        </div>
        <button type="submit">Add </button>
      </form>
    </div>
  );
}

export default AddProject;
