const app = require('./app.js');
const startDB = require('./loaders/mongodb.js');

startDB();

app.listen(3000, _ => console.log('Server is running'));