'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '123456';

  config.news = {
    pageSize: 30,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  config.security = {
    csrf: {
      enable: false
    }
  }

  config.cors = {
    origin: '*',
    allowedMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  return config;
};
