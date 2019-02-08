'use strict';

module.exports = app => {
  const { router, controller } = app;
  
  router.get('/news', controller.news.list)

  // these endpoints are only available in non-production mode
  // the purpose is to make sure all kinds of errors are handled properly
  if (process.env.NODE_ENV != 'production') {
    router.get('/app_error', controller.error.appError)
    router.get('/server_error', controller.error.serverError)
    router.get('/random_error', controller.error.randomError)
  }

  router.all('*', controller.error.notFound)
};
