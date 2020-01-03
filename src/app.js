const path = require('path') // path is built in
const express = require('express') // load via npm
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs') // need to load hbs via npm
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to server
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Photos and Videos Website',
    creater: 'Jeff A. Ripke'
  })
})

app.get('/2020', (req, res) => {
  res.render('2020', {
    title: '2020 Photos'
  })
})

app.get('/photoList', (req, res) => {
  res.render('photoList', {
    title: 'Photos'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404 page not found'
  })
})

app.listen(3004, () => {
  console.log('Sever started on port 3004!!!')
})