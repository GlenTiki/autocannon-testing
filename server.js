'use strict'

const http = require('http')
const autocannon = require('autocannon')

const server = http.createServer(handle)

server.listen(0, startBench)

function handle (req, res) {
  res.end('hello world')
}

function startBench () {
  const url = 'http://localhost:' + server.address().port

  console.log('listening on ' + url)

  const instance = autocannon({
    url: url,
    connections: 1000,
    duration: 10
  }, finishedBench)

  autocannon.track(instance)

  // console.log(instance)

  instance.on('response', function (client, statusCode, returnBytes, responseTime) {
    // console.log('res', arguments)
    // client.setHeaders({ .. })
    // client.body = ...
  })

  function finishedBench (err, res) {
    console.log('finished bench', err, res)
    process.exit(0)
  }
}
