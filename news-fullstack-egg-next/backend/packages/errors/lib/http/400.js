const HttpError = require('./http_error')

class BadRequestError extends HttpError {
  constructor(message) {
    const status = 400
    const code = 'BAD_REQUEST'
    message = message || 'Bad Request'

    super({ code, message, status })
  }
}

module.exports = BadRequestError
