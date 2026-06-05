const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Simulated Database
let tasks = [
    { id: 1, title: "Learn HTTP Methods", status: "complete" },
    { id: 2, title: "Build REST API", status: "in-progress" }
];

// 1. GET all tasks
app.get('/api/tasks', (req, res) => {
    res.status(200).json({ success: true, count: tasks.length, data: tasks });
});

// 2. GET single task
app.get('/api/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ success: false, error: "Task not found." });
    res.status(200).json({ success: true, data: task });
});

// 3. POST create task
app.post('/api/tasks', (req, res) => {
    const { title, status } = req.body;
    if (!title || typeof title !== 'string') {
        return res.status(400).json({ success: false, error: "Validation Failed: 'title' is required." });
    }
    const newTask = { id: tasks.length + 1, title: title, status: status || "pending" };
    tasks.push(newTask);
    res.status(201).json({ success: true, message: "Task created.", data: newTask });
});

// 4. PUT update task
app.put('/api/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ success: false, error: "Task not found." });
    
    task.title = req.body.title || task.title;
    task.status = req.body.status || task.status;
    res.status(200).json({ success: true, message: "Task updated.", data: task });
});

// 5. DELETE task
app.delete('/api/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).json({ success: false, error: "Task not found." });
    
    tasks.splice(taskIndex, 1);
    res.status(204).send();
});

// Start Server
app.listen(PORT, () => {
    console.log(`🧠 Nervous System Active: API running on http://localhost:${PORT}`);
});