'use strict'

const http = require('http')

const server = http.createServer(handle)

server.listen(3000, startBench)

function handle (req, res) {
  res.end('hello world')
}

function startBench () {
  const url = 'http://localhost:' + server.address().port

  console.log('listening on ' + url)
}
