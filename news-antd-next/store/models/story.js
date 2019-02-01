import fetchData from '../../utils/fetchData'

const PAGE_SIZE = 30

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
      const { type, page } = payload
      const start = PAGE_SIZE * (page - 1)
      const end = start + PAGE_SIZE
      const ids = await fetchData(type)
      const pageIds = ids.slice(start, end)

      const stories = await Promise.all(pageIds.map(id => fetchData(`item/${id}`)))
      this.saveStories(stories)
      return { stories }
    }
  })
}
