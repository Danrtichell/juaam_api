'use strict';

const express = require('express');
const event = require('../controllers/event.controller');

const router = express.Router();

router.route('/')
  /** GET /api/events - Get list of events */
  .get(event.list)

  /** POST /api/events - Create new event */
  .post(event.create);

// router.route('/:eventId')
//   /** GET /api/events/:eventId - Get event */
//   .get(event.read)

//   /** PUT /api/events/:eventId - Update event */
//   .put(event.update)

//   /** DELETE /api/events/:eventId - Delete event */
//   .delete(event.delete);

module.exports = router;
