'use strict'

const { mock, assert } = require('egg-mock/bootstrap')

describe('test/app/controller/health.test.js', () => {
  let app

  before(async () => {
    app = mock.app()
    await app.ready()
  })

  after(() => app.close())
  
  it('(GET /healthcheck) should get an uptime', async () => {
    const result = await app
      .httpRequest()
      .get('/healthcheck')
      .expect(200)
    assert(result.body.uptime)
  })
})
