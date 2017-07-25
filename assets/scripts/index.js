'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./events')
const dt = require('datatables.net')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

$(() => {
  authEvents.addHandlers()
})

// use require without a reference to ensure a file is bundled
require('./example')
