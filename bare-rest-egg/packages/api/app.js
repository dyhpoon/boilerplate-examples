module.exports = app => {
  if (process.env.EGG_SERVER_ENV != 'unittest') {
    app.config.coreMiddleware.unshift('morgan')
  }

  app.config.coreMiddleware.unshift('healthcheck')
  app.config.coreMiddleware.unshift('errorHandler')
}
