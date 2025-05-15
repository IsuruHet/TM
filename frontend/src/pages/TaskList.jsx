import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import api from "../api";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    deadline: "",
    assignedTo: "",
    status: "Pending",
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await api.get("/api/tasks");
    setTasks(res.data);
  };

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      deadline: "",
      assignedTo: "",
      status: "Pending",
    });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await api.put(`/api/tasks/${editingId}`, form);
    } else {
      await api.post("/api/tasks", form);
    }
    await fetchTasks();
    resetForm();
  };

  const handleEdit = (task) => {
    setForm({
      title: task.title,
      description: task.description,
      deadline: task.deadline.slice(0, 10),
      assignedTo: task.assignedTo,
      status: task.status,
    });
    setEditingId(task._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    await api.delete(`/api/tasks/${id}`);
    fetchTasks();
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
      <h2 className="text-2xl font-bold mb-4">
        {editingId ? "Edit Task" : "Add Task"}
      </h2>

      {/* Add/Edit Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
      >
        <input
          name="title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Title"
          className="border px-4 py-2 rounded"
          required
        />
        <input
          name="assignedTo"
          value={form.assignedTo}
          onChange={(e) => setForm({ ...form, assignedTo: e.target.value })}
          placeholder="Assigned To"
          className="border px-4 py-2 rounded"
          required
        />
        <input
          type="date"
          name="deadline"
          value={form.deadline}
          onChange={(e) => setForm({ ...form, deadline: e.target.value })}
          className="border px-4 py-2 rounded"
          required
        />
        <select
          name="status"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          className="border px-4 py-2 rounded"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <textarea
          name="description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Description"
          className="md:col-span-2 border px-4 py-2 rounded"
          required
        />
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {editingId ? "Update Task" : "Add Task"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Search/Sort/PDF */}
      <div className="flex flex-wrap gap-4 mb-4 items-center">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-2 py-1 rounded w-full sm:w-60"
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

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onEdit={() => handleEdit(task)}
            onDelete={() => handleDelete(task._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
