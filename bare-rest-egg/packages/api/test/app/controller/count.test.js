'use strict'

const { mock, assert } = require('egg-mock/bootstrap')

describe('test/app/controller/count.test.js', () => {
  let app

  beforeEach(async() => {
    app = mock.app()
    await app.ready()
  })

  afterEach(() => {
    app.close()
  })

  it('(GET /count) get count', async () => {
    await app.httpRequest().get('/count').expect(200).expect({ count: 0 })
  })

  it('(POST /count) increment count', async () => {
    await app.httpRequest().post('/count').expect(204)
    await app.httpRequest().get('/count').expect({ count: 1 })
  })

  it('(DELETE /count) decrement count', async () => {
    await app.httpRequest().post('/count').expect(204)
    await app.httpRequest().delete('/count').expect(204)
    await app.httpRequest().get('/count').expect({ count: 0 })
  })
})
