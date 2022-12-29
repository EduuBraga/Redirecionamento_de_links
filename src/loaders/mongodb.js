const mongoose = require('mongoose');

const mongoOptions = {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  family: 4,
};

mongoose.set('strictQuery', true);

const startDB = async () => {
  await mongoose.connect('mongodb://localhost:27017/links', mongoOptions);
};

module.exports = startDB;