

// Importaciones y set-up inicial

const mongoose = require('mongoose');
const TaskModel = require('../models/taskModels');
const connectDB = require('../db');

// Función para obtener todas las tareas

const getAllTasks = async function () {
    try{
        await connectDB();
        return await TaskModel.find({});
    }
    catch (err) {
        console.error('Error al obtener tareas', err);
        return err;
    }
};

// Función para agregar una nueva tarea

const addTask = async function (task) {
    try {
        await connectDB();
        return await TaskModel.create(task);
    }
    catch (err) {
        console.error('Error al crear tarea', err);
        return err;
    }
};

// Función para actualizar una tarea

const updateTask = async function (id, data) {
    try {
        await connectDB();
        return await TaskModel.updateOne({ _id: id },{ $set: { ...data } });
    }
    catch (err) {
        console.error('Error al actualizar tarea', err);
        return err;
    } 
};

// Función para eliminar tarea

const deleteTaskByID = async function (id) {
    try {
        await connectDB();
        return await TaskModel.deleteOne({ _id: id });
    }
    catch (err) {
        console.error('Error al eliminar tarea', err);
        return err;
    }
};

const CRUD = {
    getAllTasks,
    addTask,
    updateTask,
    deleteTaskByID,
  };
  
  module.exports = CRUD;