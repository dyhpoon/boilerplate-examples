# boilerplate-examples

> A collection of example projects for quick prototype

# useful tips
```bash
curl -H 'accept: application/json' -X POST http://localhost:7001
curl -d '{"name":"bob"}' -H 'accept: application/json' -H 'Content-Type: application/json' -X POST http://localhost:7001
curl -d '{"name":"bob"}' -H 'Content-Type: application/json' http://example.com/users/1234
```

# controller tips
```js
// /posts?category=egg&language=node
class PostController extends Controller {
  async listPosts() {
    const query = this.ctx.query;
    // {
    //   category: 'egg',
    //   language: 'node',
    // }
  }
}
```
```js
// app.get('/projects/:projectId/app/:appId', 'app.listApp');
// GET /projects/1/app/2
class AppController extends Controller {
  async listApp() {
    assert.equal(this.ctx.params.projectId, '1');
    assert.equal(this.ctx.params.appId, '2');
  }
}
```
```js
// POST /api/posts HTTP/1.1
// Host: localhost:3000
// Content-Type: application/json; charset=UTF-8
//
// {"title": "controller", "content": "what is controller"}
class PostController extends Controller {
  async listPosts() {
    assert.equal(this.ctx.request.body.title, 'controller');
    assert.equal(this.ctx.request.body.content, 'what is controller');
  }
}
```
