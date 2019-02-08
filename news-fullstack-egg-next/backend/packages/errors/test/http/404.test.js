const assert = require('assert')
const { NotFoundError } = require('../../lib')

describe('test/http/404.test.js', () => {
  it('404 / NotFoundError', () => {
    const err = new NotFoundError()
    assert(err.code === 'NOT_FOUND')
    assert(err.message === 'Not Found')
    assert(err.name === 'NotFoundError')
    assert(err.status === 404)
  })
})
