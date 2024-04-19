import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../context/UserContext";
import { updateProject } from "../store/projectSlice";

function EditPage() {
  const { id } = useParams();
  const userContext = useContext(UserContext);
  const dispatch = useDispatch();
  const projectDet = useSelector((state) => state.project.projects);
  const projectObj = projectDet.filter((item) => item.id === id)[0];
  console.log(projectObj);
  const [editData, setEditData] = useState(projectObj);
const navigate=useNavigate()
  const handleChange = (e) => {
    setEditData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  function handleEditSubmit(event) {
    event.preventDefault();
    console.log(editData);
    dispatch(updateProject(editData)).then(()=>{
        navigate("/home");
    });
  }

  return (
    <div>
        Edit project
      <div className="w-[90%] p-8 bg-blue-200">
        <form
          action=""
          className="flex flex-col gap-2"
          onSubmit={handleEditSubmit}
        >
          <div className="gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              defaultValue={projectObj.name}
              required
            />
          </div>
          <div className=" gap-2">
            <label htmlFor="details">Details</label>
            <input
              type="text"
              name="details"
              id="details"
              onChange={handleChange}
              defaultValue={projectObj.details}
              required
            />
          </div>
          <div className=" gap-2">
            <label htmlFor="startedAt">Start date</label>
            <input
              type="date"
              name="startedAt"
              id="startedAt"
              onChange={handleChange}
              defaultValue={projectObj.startedAt}
              required
            />
          </div>
          <div className=" gap-2">
            <label htmlFor="endingAt">End date</label>
            <input
              type="date"
              name="endingAt"
              id="endingAt"
              onChange={handleChange}
              required
              defaultValue={projectObj.endingAt}
            />
          </div>
          <button type="submit">Edit </button>
        </form>
      </div>
    </div>
  );
}

export default EditPage;
