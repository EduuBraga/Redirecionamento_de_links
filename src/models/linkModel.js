const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const linkSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  url: { type: String, required: true },
  clicks: { type: Number, default: 0 }
});

const linkModel = model('Links', linkSchema);

module.exports = linkModel;