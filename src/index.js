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

db.once('open', () => {
  app.get('/:title', async (req, res) => {
    const { title } = req.params
  
    try {
      const doc = await linkModel.findOne({title})

      res.send(doc)
    } catch (error) {
      res.send(error)
    }
  })
})

app.listen(3000, _ => console.log('Server is running'));