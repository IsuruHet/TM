const PDFDocument = require("pdfkit");
const fs = require("fs");

module.exports = (tasks, path) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(path));

  doc.fontSize(20).text("Task Report", { align: "center" });
  doc.moveDown();
  tasks.forEach((task) => {
    doc.text(`Title: ${task.title}`);
    doc.text(`Assigned To: ${task.assignedTo}`);
    doc.text(`Status: ${task.status}`);
    doc.text("---");
  });

  doc.end();
};
