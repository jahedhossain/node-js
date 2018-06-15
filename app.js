const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')

// router include
const movieRouter = require('./api/router/moviesRouter')

mongoose.connect('mongodb://localhost/rest-mvc');
mongoose.Promise = global.Promise 

const db = mongoose.connection;
db.on('error', err => console.log('connection error'));
db.once('open', () => console.log('were connected!'));

//midilware  
app.use(morgan('div'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api/movies', movieRouter)
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))  
  
app.listen(3000, () => console.log('Example app listening on port 3000!'))    