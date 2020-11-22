// Model - the M in MVC
const mongoose = require('mongoose');

// How the data looks
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  spicyFactor: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  }
});

// fetch the data
module.exports = mongoose.model('Cat', schema);
