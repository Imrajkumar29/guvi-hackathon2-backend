const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  equipid: {
    required: true,
    type: Number
  },
  name: {
    required: true,
    type: String
  },
  plantype: {
    required: true,
    type: String
  },
  imgsrc: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: Number
  }
})

module.exports = mongoose.model('Data', dataSchema)