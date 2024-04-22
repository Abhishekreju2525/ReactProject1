import { Button, Modal } from "flowbite-react";
import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useDispatch } from "react-redux";
import { addNewProject, createProject } from "../store/projectSlice";
export default function AddModal() {
  const [openModal, setOpenModal] = useState(false);
  const userContext = useContext(UserContext);
  const userId = userContext.userObj.id;
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ userId: userId });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    dispatch(createProject(formData));
    setOpenModal(false);
  }
  return (
    <>
      <Button onClick={() => setOpenModal(true)}>New Project?</Button>
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="bg-[#3b3b3b2d]"
      >
        <Modal.Header className="p-4">Enter project details</Modal.Header>
        <Modal.Body>
          <form
            action=""
            className="flex flex-col gap-4 "
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-gray-600">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="details" className="text-gray-600">
                Details
              </label>
              <input
                type="text"
                name="details"
                id="details"
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex gap-1">
              <div className="flex flex-col gap-1 w-1/2">
                <label htmlFor="startedAt" className="text-gray-600">
                  Start date
                </label>
                <input
                  type="date"
                  name="startedAt"
                  id="startedAt"
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                  
                  required
                />
              </div>
              <div className="flex flex-col gap-1 w-1/2">
                <label htmlFor="endingAt" className="text-gray-600">
                  End date
                </label>
                <input
                  type="date"
                  name="endingAt"
                  id="endingAt"
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              className="rounded-md bg-[#f9744b] text-white w-fit px-4 mt-4"
            >
              Add
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
