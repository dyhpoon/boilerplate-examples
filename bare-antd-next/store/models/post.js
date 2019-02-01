import fetch from 'isomorphic-unfetch'

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
      this.savePosts(data)
    }
  })
}
