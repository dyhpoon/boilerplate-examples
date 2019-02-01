import fetch from 'isomorphic-unfetch'
import { normalize, schema } from 'normalizr'

const postSchema = new schema.Entity('posts')

export default {
  state: {
    posts: {}
  },

  reducers: {
    savePosts: (_state, payload) => {
      return {
        posts: payload
      }
    }
  },

  effects: (_dispatch) => ({
    async getpostsAsync(payload, _rootState) {
      const { req } = payload
      const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
      const res = await fetch(`${baseUrl}/api/post`)
      const data = await res.json()
      const { entities } = normalize(data, { posts: [postSchema] })
      this.savePosts(entities.posts)
    }
  })
}
