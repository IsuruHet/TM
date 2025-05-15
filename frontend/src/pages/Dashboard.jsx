import { useEffect, useState } from "react";
import api from "../api";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("/api/tasks").then((res) => setTasks(res.data));
  }, []);

  const total = tasks.length;
  const pending = tasks.filter((t) => t.status === "Pending").length;
  const completed = tasks.filter((t) => t.status === "Done").length;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded p-4 text-center">
          <h2 className="text-xl font-semibold">Total Tasks</h2>
          <p className="text-2xl font-bold text-blue-600">{total}</p>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <h2 className="text-xl font-semibold">Pending</h2>
          <p className="text-2xl font-bold text-yellow-600">{pending}</p>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <h2 className="text-xl font-semibold">Completed</h2>
          <p className="text-2xl font-bold text-green-600">{completed}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
