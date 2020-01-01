const path = require('path') // path is built in
const express = require('express') // load via npm

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
app.set('view engine', 'hbs') // need to load hbs via npm
app.set('views', viewsPath)

// Setup static directory to server
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Photos and Videos Website',
    creater: 'Jeff A. Ripke'
  })
})

app.get('/photoList', (req, res) => {
  res.render('photoList')
})

app.listen(3004, () => {
  console.log('Sever started on port 3004!!!')
})