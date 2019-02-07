'use strict'

const Controller = require('egg').Controller
const { NotFoundError, AppError, InternalServerError } = require('@rest-egg/errors')

class ErrorController extends Controller {
  async notFound() {
    throw new NotFoundError()
  }

  async serverError() {
    throw new InternalServerError()
  }

  async appError() {
    throw new AppError('app error')
  }

  async randomError() {
    throw new Error("some random error")
  }
}

module.exports = ErrorController
