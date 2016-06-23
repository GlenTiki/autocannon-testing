'use strict'

const autocannon = require('autocannon')
const url = 'http://localhost:3000'

const instance = autocannon({
  url: url,
  connections: 1000,
  duration: 10
}, finishedBench)

autocannon.track(instance)

let h = 0
instance.on('response', function (client, statusCode, returnBytes, responseTime) {
  client.setHeaders(nextHeader())
})

function nextHeader () {
  var ret = {}
  ret[`header${h}`] = `headerV${h++}`
  return ret
}

function finishedBench (err, res) {
  // console.log('finished bench', err, res)
}
