import { add, sub, inc, dec, change_b, change_r } from './constant.js'

const countInitialState = {
  counter: 0
}

// 拆分count的reducer
function countReducer(state = countInitialState, action) {
  switch (action.type) {
    case add:
      return { ...state, counter: state.counter + action.num }
    case sub:
      return { ...state, counter: state.counter - action.num }
    case inc:
      return { ...state, counter: state.counter + 1 }
    case dec:
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}

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

function reducer(state = {}, action) {
  return {
    counterInfo: countReducer(state.counterInfo, action),
    homeInfo: homeReducer(state.homeInfo, action)
  }
}

export default reducer