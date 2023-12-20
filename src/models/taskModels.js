

// Importaciones y set-up inicial

const mongoose = require('mongoose');

// Esquema

const taskSchema = new mongoose.Schema({
    description: { type: String, required: true },
    category: { type: String, required: true },
    isCompleted: { type: Boolean, required: true }
});

const TaskModel = mongoose.model('tasks', taskSchema);

module.exports = TaskModel;