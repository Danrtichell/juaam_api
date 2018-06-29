'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  dateTime: {
    type: String,
  },
  venueName: {
    type: String,
  },
  veneuCoordinates: {
    lat: {
      type: Number,
    },
    long: {
      type: Number,
    }
  },
  about: {
    type: String,
  },
  termsConditions: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
});


module.exports = mongoose.model('Events', EventSchema);
