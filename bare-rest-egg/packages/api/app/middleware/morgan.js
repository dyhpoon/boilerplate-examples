const morgan = require('koa-morgan')

module.exports = (options) => {
  return morgan('short', options)
}
