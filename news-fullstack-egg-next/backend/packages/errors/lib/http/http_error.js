const BaseError = require('../base_error')

class HttpError extends BaseError {
  constructor(options) {
    super(options)
    this.headers = {}
    this.status = this.options.status
    this.headers = this.options.headers
  }
}

module.exports = HttpError
