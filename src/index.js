const app = require('./app.js');
const mongoose = require('mongoose');
const startDB = require('./loaders/mongodb.js');

startDB();

const { Schema, model } = mongoose;

const linkSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  link: { type: String, required: true },
  clicks: { type: Number, default: 0 }
})

const linkModel = model('Link', linkSchema)

const link = new linkModel({
  title: 'EduuBraga',
  description: 'Instagram',
  link: 'https://instagram/EduuBraga',
  clicks: 0
})

link.save().then(doc => {
  console.log(doc)
}).catch(err => {
  console.log(err)
})

app.listen(3000, _ => console.log('Server is running'));