'use strict'

const { BaseError } = require('@rest-egg/errors')

module.exports = () => {
  return async function errorHandler(context, next) {
    try {
      await next()
    } catch (err) {
      if (err instanceof BaseError) {
        const errorBody = {
          code: err.code,
          status: err.status || 500,
          message: err.message,
        }
        if (context.acceptJSON) {
          context.body = errorBody
        } else {
          context.body = JSON.stringify(errorBody)
        }
        context.status = errorBody.status
      } else {
        console.error(err)
        context.app.emit('error', err, context)
        throw err
      }
    }
  }
}
