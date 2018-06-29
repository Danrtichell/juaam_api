'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  title: {
    type: String,
  },
  url: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
});


module.exports = mongoose.model('Videos', VideoSchema);
