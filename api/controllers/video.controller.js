'use strict';

const mongoose = require('mongoose'),
  Video = require('../models/video.model');

function list(req, res) {
  Video.find({}, function(err, videos) {
    if (err)
      res.send(err);
    res.json(videos);
  });
};

function create(req, res) {
  var newVideo = new Video(req.body);
  newVideo.save(function(err, video) {
    if (err)
      res.send(err);
    res.json(video);
  });
};

module.exports = { list, create };

