'use strict'

const autocannon = require('autocannon')
const url = 'http://localhost:3000'

const instance = autocannon({
  url: url,
  connections: 1000,
  duration: 10
}, finishedBench)

autocannon.track(instance)

let message = 0
instance.on('response', function (client, statusCode, returnBytes, responseTime) {
  client.setBody('message ' + message++)
})

function finishedBench (err, res) {
  // console.log('finished bench', err, res)
}
