const HttpError = require('./http_error')

class InternalServerError extends HttpError {
  constructor(message) {
    const status = 500
    const code = 'INTERNAL_SERVER_ERROR'
    message = message || 'Internal Server Error'

    super({ code, message, status })
  }
}

module.exports = InternalServerError
