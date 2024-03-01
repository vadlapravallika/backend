// routes.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');


// Create Todo
router.post('/todos', async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// Read All Todos
router.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read Single Todo
router.get('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) throw Error('Todo not found');
    res.json(todo);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// Update Todo
router.put('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Todo
router.delete('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted successfully', todo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
