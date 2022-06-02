import { change_b, change_r } from './constants'

const homeInitialState = {
  banners: [],
  recommends: []
}

// 拆分homeReducer
function homeReducer(state = homeInitialState, action) {
  switch (action.type) {
    case change_b:
      return { ...state, banners: action.banners}
    case change_r:
      return { ...state, recommends: action.recommends}
    default:
      return state
  }
}

export default homeReducer