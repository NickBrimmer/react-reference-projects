const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  goal: {
    type: Number,
    required: true,
    min: 0
  },
  progress: {
    type: Number,
    required: true,
    default: 0,
    min: 0
  }
});

module.exports = mongoose.model('Habit', schema);
