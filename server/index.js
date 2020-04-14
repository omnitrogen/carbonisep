var http = require('http')
var app = require('./app')

const PORT = 8000

async function startServer () {
  try {
    http.createServer(app).listen(PORT, '0.0.0.0')
    console.log(`Server running at http://localhost:${PORT}/`)
  } catch (error) {
    console.log('Server could not be created')
    console.log(error)
  }
}

startServer()
