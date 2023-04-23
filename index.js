require('dotenv').config();

const express = require('express');
var cors = require('cors');

const mongoose = require('mongoose');
const mySecret = process.env['DATABASE_URL']
// const mongoString = process.env['DATABASE_URL']
mongoose.connect(mySecret);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

const app = express();
app.use(cors());
app.use(express.json());
const routes = require('./routes/routes');
app.use('/api', routes)
app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started here');
});
