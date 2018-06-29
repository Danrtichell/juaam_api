'use strict';

const express = require('express');
const video = require('../controllers/video.controller');

const router = express.Router();

router.route('/')
  /** GET /api/videos - Get list of videos */
  .get(video.list)

  /** POST /api/videos - Create new video */
  .post(video.create);

// router.route('/:videoId')
//   /** GET /api/videos/:videoId - Get video */
//   .get(video.read)

//   /** PUT /api/videos/:videoId - Update video */
//   .put(video.update)

//   /** DELETE /api/videos/:videoId - Delete video */
//   .delete(video.delete);

module.exports = router;
