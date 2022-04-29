import { StatusCodes } from 'http-status-codes';
import Todo from '../models/Todo.js';

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(StatusCodes.OK).json({ count: todos.length, todos });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: error.message });
  }
};

const getTodo = async (req, res) => {
  const { id: todoId } = req.params;
  const todo = await Todo.findOne({ _id: todoId });
  if (!todo) {
    throw new Error(`No task with id: ${todoId}`);
  }
  res.status(StatusCodes.OK).json({ todo });
};

const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(StatusCodes.CREATED).json({ todo });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: error.message });
  }
};

const updateTodo = async (req, res) => {
  const { id: todoId } = req.params;
  const todo = await Todo.findOne({ _id: todoId });
  if (!todo) {
    throw new Error(`No task with id: ${todoId}`);
  }
  todo.name = req.body.name;
  todo.status = req.body.status;
  todo.priority = req.body.priority;
  await todo.save();
  res.status(StatusCodes.OK).json({ todo, success: true });
};

const deleteTodo = async (req, res) => {
  const { id: todoId } = req.params;
  const todo = await Todo.findOne({ _id: todoId });
  if (!todo) {
    throw new Error(`No task with id: ${todoId}`);
  }
  await todo.remove();
  res.status(StatusCodes.CREATED).json({ msg: 'task deleted!' });
};

export { getTodos, getTodo, createTodo, updateTodo, deleteTodo };
