import ToDoItem from "./ToDoItem";

const ToDoList = ({
  data,
  openEdit,
  editClick,
  handleUpdateCheck,
  deleteClick,
}) => {
  return (
    <ul className="mb-10 flex flex-col">
      <li className="bg-gray-400 rounded-xl  mb-3 flex  text-gray-300 justify-between line-through p-2 min-w-xs max-w-xs">
        Just Do It!
        <div className="flex gap-2">
          <button className="bg-gray-800/50 text-white rounded-4xl cursor-no-drop ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z" />
            </svg>
          </button>
          <button
            className="bg-gray-800/50 text-white rounded-4xl cursor-no-drop hover:opacity-80 active:opacity-80"
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          </button>
        </div>
      </li>
      {data.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          openEdit={openEdit}
          editClick={editClick}
          handleUpdateCheck={handleUpdateCheck}
          deleteClick={deleteClick}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
