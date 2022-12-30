const app = require('./app.js');
const { startDB, db } = require('./loaders/mongodb.js');

startDB();

db.on('error', () => console.log('Error ao carregar o banco...'))
db.once('open', () => console.log('Banco Carregado'))

app.listen(3000, _ => console.log('Server is running'));