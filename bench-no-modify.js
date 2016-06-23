'use strict'

const autocannon = require('autocannon')
const url = 'http://localhost:3000'

const instance = autocannon({
  url: url,
  connections: 1000,
  duration: 10
}, finishedBench)

autocannon.track(instance)

function finishedBench (err, res) {
  console.log('finished bench', err, res)
}
