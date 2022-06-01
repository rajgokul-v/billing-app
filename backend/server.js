const express = require('express')
const app = express()
const bodyParser = require('body-parser'); // middleware

app.use(bodyParser.urlencoded({ extended: false }));
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/login', function (req, res) {
  res.sendfile( _dirname + "/static/login")
})


 
app.listen(5000, console.log(`Server is running in port 5000`))