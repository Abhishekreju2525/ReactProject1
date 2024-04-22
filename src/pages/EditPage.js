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
  const navigate = useNavigate();
  const handleChange = (e) => {
    setEditData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  function handleEditSubmit(event) {
    event.preventDefault();
    console.log(editData);
    dispatch(updateProject(editData)).then(() => {
      navigate(`/view/${editData.id}`);
    });
  }

  return (
    <div>
      <div className="max-w-[90%] p-8 bg-[#ededed] mx-auto rounded-lg mt-5">
        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={handleEditSubmit}
        >
          <div className="flex flex-col gap-2">
            <h1 className="my-2 text-3xl">
              Edit project ID : #{projectObj.id}
            </h1>
            <label htmlFor="name" className="text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              defaultValue={projectObj.name}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="details" className="text-gray-600">
              Details
            </label>
            <input
              type="text"
              name="details"
              id="details"
              onChange={handleChange}
              defaultValue={projectObj.details}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            <div className="flex flex-col w-full md:w-1/2 gap-2">
              <label htmlFor="startedAt" className="text-gray-600">
                Start date
              </label>
              <input
                type="date"
                name="startedAt"
                id="startedAt"
                onChange={handleChange}
                defaultValue={projectObj.startedAt}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2 gap-2">
              <label htmlFor="endingAt" className="text-gray-600">
                End date
              </label>
              <input
                type="date"
                name="endingAt"
                id="endingAt"
                onChange={handleChange}
                defaultValue={projectObj.endingAt}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Edit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPage;
