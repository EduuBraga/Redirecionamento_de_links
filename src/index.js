const app = require('./app.js');
const linkModel = require('./models/linkModel.js');
const { startDB, db } = require('./loaders/mongodb.js');

startDB();

const link = new linkModel({
  title: 'linkedin',
  description: 'meu linkedin',
  url: 'https://www.linkedin.com/in/eduardo-braga-dev/',
  clicks: 0
}) 

link.save().then(doc => {
  console.log(doc)
}).catch(err => {
  console.log(err)
})

db.on('error', () => console.log('Error ao carregar o banco...'))
db.once('open', () => console.log('Banco Carregado'))

app.listen(3000, _ => console.log('Server is running'));