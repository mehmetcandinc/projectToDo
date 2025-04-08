import React, { useState } from "react";

const AddForm = ({ addToDo }) => {
  const [formData, setFormData] = useState({
    todo: "",
  });

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData((preveState) => ({ ...preveState, todo: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(formData);
    setFormData({ todo: "" });
  };

  return (
    <form className="mb-10 flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Tasks, Projects, and More"
        maxLength={38}
        className=" bg-gray-300 rounded-l-2xl focus:bg-gray-200 focus:animate-pulse w-xs max-w-xs p-2"
        // name="todo"
        value={formData.todo}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className=" bg-gray-900 text-white rounded-r-2xl hover:opacity-80 active:opacity-80 cursor-pointer px-2"
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
  );
};

export default AddForm;
