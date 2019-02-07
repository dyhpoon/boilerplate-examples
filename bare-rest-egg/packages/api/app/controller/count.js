'use strict'

const Controller = require('egg').Controller

class CountController extends Controller {
  async get() {
    const { ctx, app } = this
    ctx.body = { count: app.counter }
  }

  async increment() {
    const { ctx, app } = this
    app.counter++
    ctx.status = 204
  }

  async decrement() {
    const { ctx, app } = this
    app.counter--
    ctx.status = 204
  }
}

module.exports = CountController
