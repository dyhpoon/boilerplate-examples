const assert = require('assert')
const { AppError, BaseError, InternalServerError } = require('../lib')

describe('test/error.test.js', () => {
  describe('base error', () => {
    it('base error without params', () => {
      const err = new BaseError()
      assert(err.code === '')
      assert(err.message === '')
      assert(err.name === 'BaseError')
    })

    it('base error with options', () => {
      const err = new BaseError({
        code: 'CODE',
        message: 'error',
      })
      assert(err.code === 'CODE')
      assert(err.message === 'error')
      assert(err.name === 'BaseError')
    })
  })

  describe('error', () => {
    it('error without message', () => {
      const err = new AppError()
      assert(err.code === 'APP_ERROR')
      assert(err.message === '')
      assert(err.name === 'AppError')
    })
    it('error with message', () => {
      const err = new AppError('app error')
      assert(err.code === 'APP_ERROR')
      assert(err.message === 'app error')
      assert(err.name === 'AppError')
    })
  })
})
