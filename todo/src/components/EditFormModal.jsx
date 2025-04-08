import React, { useEffect, useState } from "react";

const EditForm = ({ openEditCheck, closeEdit, editToDo, todo }) => {
  const [formData, setFormData] = useState({
    todo: "",
  });

  useEffect(() => {
    if (todo) setFormData(todo);
  }, [todo]);

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData((preveState) => ({
      ...preveState,
      todo: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editToDo(formData);
    setFormData({ todo: "" });
    closeEdit();
  };

  if (!openEditCheck) return null;
  return (
    <div className="flex flex-col fixed justify-center  backdrop-blur-xs  max-w-md h-dvh overflow-x-hidden">
      <form className="flex" onSubmit={handleSubmit}>
        <button
          type="button"
          onClick={closeEdit}
          className=" cancel-edit bg-gray-900 text-white rounded-l-2xl hover:opacity-80 active:opacity-80 cursor-pointer px-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Edit Tasks, Projects, and More"
          maxLength={38}
          className="bg-gray-300 focus:bg-gray-200 focus:animate-pulse w-2xs max-w-2xs p-2"
          // name="todo"
          value={formData.todo}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className=" edit bg-gray-900 text-white rounded-r-2xl hover:opacity-80 active:opacity-80 cursor-pointer px-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q32 0 62-6t58-17l60 61q-41 20-86 31t-94 11Zm280-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80ZM424-296 254-466l56-56 114 114 400-401 56 56-456 457Z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default EditForm;
