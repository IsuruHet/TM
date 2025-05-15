import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import api from "../api";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await api.get("/api/tasks");
    setTasks(res.data);
  };

  const handleDownloadPDF = async () => {
    const res = await api.get("/api/tasks/pdf", {
      responseType: "blob",
    });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "TaskReport.pdf");
    document.body.appendChild(link);
    link.click();
  };

  const filtered = tasks
    .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "title") return a.title.localeCompare(b.title);
      if (sort === "deadline")
        return new Date(a.deadline) - new Date(b.deadline);
      return 0;
    });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Tasks</h2>

      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-2 py-1 rounded w-1/3"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="">Sort By</option>
          <option value="title">Title</option>
          <option value="deadline">Deadline</option>
        </select>
        <button
          onClick={handleDownloadPDF}
          className="ml-auto bg-green-500 text-white px-4 py-2 rounded"
        >
          Download PDF Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
