module.exports = app => {
  if (process.env.NODE_ENV != 'test') {
    app.config.coreMiddleware.unshift('morgan')
  }

  app.config.coreMiddleware.unshift('healthcheck')
  app.config.coreMiddleware.unshift('errorHandler')

  app.counter = 0
}
