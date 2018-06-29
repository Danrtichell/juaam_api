'use strict';

const express = require('express');
const todoList = require('../controllers/task.controller');

const router = express.Router();

router.route('/')
  /** GET /api/tasks - Get list of tasks */
  .get(todoList.list_all_tasks)

  /** POST /api/tasks - Create new task */
  .post(todoList.create_a_task);

router.route('/:taskId')
  /** GET /api/tasks/:taskId - Get task */
  .get(todoList.read_a_task)

  /** PUT /api/tasks/:taskId - Update task */
  .put(todoList.update_a_task)

  /** DELETE /api/tasks/:taskId - Delete task */
  .delete(todoList.delete_a_task);

module.exports = router;
