'use strict'

const healthcheck = require('koa-simple-healthcheck')

module.exports = (options) => {
  return healthcheck(options)
}
