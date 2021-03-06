import { init } from '@rematch/core'
import * as models from './models'

// rematch store with initialValue set to 5
export const initStore = (initialState = { counter: 5 }) => {
  return init({
    models,
    redux: {
      initialState
    }
  })
}
