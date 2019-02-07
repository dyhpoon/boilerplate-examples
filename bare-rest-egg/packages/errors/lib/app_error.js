const BaseError = require('./base_error')

class AppError extends BaseError {
  constructor(message) {
    const code = 'APP_ERROR'
    super({ code, message })
  }
}

module.exports = AppError
