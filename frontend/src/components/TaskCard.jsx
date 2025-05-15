import React from "react";

const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow bg-white space-y-2">
      <h2 className="text-lg font-bold">{task.title}</h2>
      <p>
        <strong>Assigned To:</strong> {task.assignedTo}
      </p>
      <p>
        <strong>Status:</strong> {task.status}
      </p>
      <p>
        <strong>Deadline:</strong>{" "}
        {new Date(task.deadline).toLocaleDateString()}
      </p>
      <p className="text-sm text-gray-600">{task.description}</p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={onEdit}
          className="bg-yellow-400 px-3 py-1 rounded text-sm"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-3 py-1 rounded text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
