const ErrorType = require('./error_type')
const TYPE = Symbol.for('BaseError')

class BaseError extends Error {
  constructor(options) {
    super()
    this[TYPE] = ErrorType.Error
    this.options = options || {}
    this.message = this.options.message || ''
    this.code = this.options.code || ''
    this.name = this.constructor.name
  }

  static getType(error) {
    return error[TYPE] || ErrorType.ERROR
  }
}

module.exports = BaseError
