'use strict'

const autocannon = require('../autocannon')
const url = 'http://localhost:3000'

const instance = autocannon({
  url: url,
  connections: 1000,
  duration: 10
}, finishedBench)

autocannon.track(instance)

let m = 0
let h = 0
instance.on('response', function (client, statusCode, returnBytes, responseTime) {
  client.setHeadersAndBody(nextHeader(), 'message ' + m++)
})

function nextHeader () {
  var r = {}
  r[`header${h}`] = `headerV${h++}`
  return r
}

function finishedBench (err, res) {
  // console.log('finished bench', err, res)
  process.exit(0)
}
