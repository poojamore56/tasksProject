let tasks = [];
let currentId = 1; // Initial Id as 1 and using AutoIncrement

class Task {
    constructor(title, description) {
        this.id = currentId++;
        this.title = title;
        this.description = description;
    }

    static findAll() {
        return tasks;
    }

    static findById(id) {
        return tasks.find(task => task.id === parseInt(id));
    }

    static create(taskData) {
        const newTask = new Task(taskData.title, taskData.description);
        tasks.push(newTask);
        return newTask;
    }

    static update(id, updatedData) {
        const task = Task.findById(id);
        if (task) {
            task.title = updatedData.title;
            task.description = updatedData.description;
            return task;
        }
        return null;
    }

    static delete(id) {
        const index = tasks.findIndex(task => task.id === parseInt(id));
        if (index !== -1) {
            tasks.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = Task;
