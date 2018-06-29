'use strict';

const mongoose = require('mongoose'),
  Event = require('../models/event.model');

function list(req, res) {
  Event.find({}, function(err, events) {
    if (err)
      res.send(err);
    res.json(events);
  });
};

function create(req, res) {
  var newEvent = new Event(req.body);
  newEvent.save(function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

module.exports = { list, create };

