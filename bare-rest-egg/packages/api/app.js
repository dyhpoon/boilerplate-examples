module.exports = app => {
  app.config.coreMiddleware.unshift('healthcheck')
  
  if (process.env.EGG_SERVER_ENV != 'unittest') {
    app.config.coreMiddleware.unshift('morgan')
  }
}
