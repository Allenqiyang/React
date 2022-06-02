import { reducer as countReducer } from './counter'
import { reducer as homeReducer } from './home'

function reducer(state = {}, action) {
  return {
    counterInfo: countReducer(state.counterInfo, action),
    homeInfo: homeReducer(state.homeInfo, action)
  }
}

export default reducer