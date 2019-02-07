const assert = require('assert')
const { InternalServerError } = require('../../lib')

describe('test/http/500.test.js', () => {
  it('500 / NotFoundError', () => {
    const err = new InternalServerError()
    assert(err.code === 'INTERNAL_SERVER_ERROR')
    assert(err.message === 'Internal Server Error')
    assert(err.name === 'InternalServerError')
    assert(err.status === 500)
  })
})
