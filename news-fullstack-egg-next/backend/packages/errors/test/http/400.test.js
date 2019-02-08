const assert = require('assert')
const { BadRequestError } = require('../../lib')

describe('test/http/400.test.js', () => {
  it('404 / NotFoundError', () => {
    const err = new BadRequestError()
    assert(err.code === 'BAD_REQUEST')
    assert(err.message === 'Bad Request')
    assert(err.name === 'BadRequestError')
    assert(err.status === 400)
  })
})
