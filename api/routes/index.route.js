const express = require('express');
const taskRoutes = require('./task.route');
const eventRoutes = require('./event.route');
const videoRoutes = require('./video.route');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount task routes at /tasks
router.use('/tasks', taskRoutes);

// mount event routes at /events
router.use('/events', eventRoutes);

// mount video routes at /videos
router.use('/videos', videoRoutes);

module.exports = router;
