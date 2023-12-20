

// Importaciones y set-up inicial

const express = require('express');
const router = express.Router();
const CRUD = require('../controllers/taskControllers');

// Ruta para obtener todas las tareas

router.get('/', async (req, res) => {
    try {
        const tasks = await CRUD.getAllTasks();
        res.json(tasks);
    }
    catch (err) {
        res.status(500).json({ error: 'Error al obtener tareas '});
    }
});

// Ruta para agregar una nueva tarea

router.post('/', async (req, res) => {
    try {
        const newTask = await CRUD.addTask(req.body);
        res.json(newTask);
    }
    catch (err) {
        res.status(500).json({ error: 'Error al crear tarea' });
    }
});

// Ruta para actualizar una tarea

router.put('/:id', async (req, res) => {
    try {
        const updatedTask = await CRUD.updateTask(req.params.id, req.body);
        res.json(updatedTask);
    }
    catch (err) {
        res.status(500).json({ error: 'Error al actualizar tarea' });
    }
});

// Ruta para eliminar una tarea 

router.delete('/:id', async (req, res) => {
    try {
        const result = await CRUD.deleteTaskByID(req.params.id);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar tarea' });
    }
});

module.exports = router;