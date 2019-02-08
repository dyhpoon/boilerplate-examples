import fetchData from '../../utils/fetchData'

export const PAGE_SIZE = 30

export default {
  state: {
    entities: []
  },

  reducers: {
    saveStories: (_state, stories) => {
      return {
        entities: stories
      }
    },
  },

  effects: (_dispatch) => ({
    async getStories(payload, _rootState) {
      const { page } = payload
      const start = PAGE_SIZE * (page - 1)
      const end = start + PAGE_SIZE
      const stories = await fetchData(page)
      console.log(stories)
      this.saveStories(stories)
      return { stories }
    }
  })
}
