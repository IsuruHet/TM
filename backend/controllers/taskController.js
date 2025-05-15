const Task = require("../models/Task");
const generatePDF = require("../utils/pdfGenerator");

exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.status(201).json(newTask);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(204).send();
};

exports.pdfTask = async (req, res) => {
  const tasks = await Task.find();
  const filePath = "TaskReport.pdf";
  generatePDF(tasks, filePath);

  // Wait briefly to ensure file is written
  setTimeout(() => {
    res.download(filePath);
  }, 1000);
};
