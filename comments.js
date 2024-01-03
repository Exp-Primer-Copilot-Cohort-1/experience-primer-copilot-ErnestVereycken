// create a web server
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const comments = []
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('index', { comments: comments })
})

app.get('/new', (req, res) => {
  res.render('new')
})

app.post('/new', urlencodedParser, (req, res) => {
  comments.push(req.body)
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})