const Task = require('../models/taskModel');

exports.getAllTasks = (req, res) => {
    res.json(Task.findAll());
};

exports.getTaskById = (req, res) => {
    const task = Task.findById(req.params.id);
    // Error handling for find task
    if (!task) {
        return res.status(404).json({ error: 'Task not found.' });
    }
    res.json(task);
};

exports.createTask = (req, res) => {
    const { title, description } = req.body;
    // Error handling for create task
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required.' });
    }
    const newTask = Task.create(req.body);
    res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
    const { title, description } = req.body;
    // Error handling for update task
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required.' });
    }
    const task = Task.update(req.params.id, req.body);
    if (!task) {
        return res.status(404).json({ error: 'Task not found.' });
    }
    res.json(task);
};

exports.deleteTask = (req, res) => {
    const success = Task.delete(req.params.id);
    // Error handling for deletee task
    if (!success) {
        return res.status(404).json({ error: 'Task not found.' });
    }
    res.status(204).send();
};
