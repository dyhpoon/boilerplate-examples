const HttpError = require('./http_error')

class NotFoundError extends HttpError {
  constructor(message) {
    const status = 404
    const code = 'NOT_FOUND'
    message = message || 'Not Found'

    super({ code, message, status })
  }
}

module.exports = NotFoundError
