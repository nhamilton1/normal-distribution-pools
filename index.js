require('dotenv').config()

const server = require('./src/server/server')

const port = process.env.PORT || 5000

server.listen(port, () => {
  console.log('listening on ' + port)
})