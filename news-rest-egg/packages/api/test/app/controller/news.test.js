'use strict';

const { mock, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/news.test.js', () => {
  let app;
  before(async () => {
    app = mock.app();
    await app.ready();
  });

  after(() => app.close());

  afterEach(mock.restore);

  it('should GET /news', async () => {
    const result = await app.httpRequest().get('/news').expect(200);
    const data = result.body
    assert(data.length === app.config.news.pageSize);
  });
});
