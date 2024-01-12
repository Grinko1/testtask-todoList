const { Router } = require('express');
const router = Router();
const Todo = require('../models/Todo');

router.post('/create', async (req, res) => {
  try {
    const { title, text, completed, status } = req.body;
    const todo = await new Todo({
      title,
      text,
      completed,
      status,
    });
    await todo.save();
    res.json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({ _id: req.params.id });

    res.json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.patch('/takeToWork/:id', async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id });

    todo.completed = false;
    todo.status = 'inprogress';

    await todo.save();
    res.json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.patch('/toggleCompleted/:id', async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id });
    if (todo.status === 'inprogress' || todo.status === 'new') {
      todo.status = 'completed';
      todo.completed = true;
    } else {
      todo.completed = false;
      todo.status = 'new';
    }

    await todo.save();
    res.json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.patch('/update/:id', async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id });
     Object.keys(req.body.todo).forEach((key) => {
       todo[key] = req.body.todo[key];
     });
    await todo.save();
    res.json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
