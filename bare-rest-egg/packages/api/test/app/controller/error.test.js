'use strict'

const { mock } = require('egg-mock/bootstrap')

describe('test/app/controller/error.test.js', () => {
  let app

  before(async () => {
    app = mock.app()
    await app.ready()
  })

  after(() => app.close())

  it('(GET /notfound) should throw an error when requesting an undefined endpoint', async () => {
    await app
      .httpRequest()
      .get('/notfound')
      .set('Accept', 'application/json')
      .expect(404)
      .expect({
        status: 404,
        code: 'NOT_FOUND',
        message: 'Not Found'
      })
  })

  it('(POST /notfound) should throw an error when requesting an undefined endpoint', async () => {
    app.mockCsrf()
    await app
      .httpRequest()
      .post('/notfound')
      .set('Accept', 'application/json')
      .expect(404)
      .expect({
        status: 404,
        code: 'NOT_FOUND',
        message: 'Not Found'
      })
  })

  it('(GET /app_error) should throw an internal error', async () => {
    await app
      .httpRequest()
      .get('/app_error')
      .set('Accept', 'application/json')
      .expect(500)
      .expect({
        code: "APP_ERROR",
        status: 500,
        message: "app error"
      })
  })

  it('(GET /server_error) should throw an internal error', async () => {
    await app
      .httpRequest()
      .get('/server_error')
      .set('Accept', 'application/json')
      .expect(500)
      .expect({
        code: "INTERNAL_SERVER_ERROR",
        status: 500,
        message: "Internal Server Error"
      })
  })

  it('(GET /random_error) should throw an internal error', async () => {
    await app
      .httpRequest()
      .get('/server_error')
      .set('Accept', 'application/json')
      .expect(500)
      .expect({
        code: "INTERNAL_SERVER_ERROR",
        status: 500,
        message: "Internal Server Error"
      })
  })
})
