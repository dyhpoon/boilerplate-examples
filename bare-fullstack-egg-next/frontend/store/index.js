import { init } from '@rematch/core'
import * as models from './models'

// rematch store with initialValue set to 5
export const initStore = (initialState) => {
  return init({
    models,
    redux: {
      initialState
    }
  })
}
