import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-bold">{task.title}</h2>
      <p>Status: {task.status}</p>
      <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
    </div>
  );
};

export default TaskCard;
