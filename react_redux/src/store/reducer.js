import { add, sub, inc, dec, change_b, change_r } from './constant.js'

const initialState = {
  counter: 0,
  banners: [],
  recommends: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case add:
      return { ...state, counter: state.counter + action.num }
    case sub:
      return { ...state, counter: state.counter - action.num }
    case inc:
      return { ...state, counter: state.counter + 1 }
    case dec:
      return { ...state, counter: state.counter - 1 }
    case change_b:
      return { ...state, banners: action.banners}
    case change_r:
      return { ...state, recommends: action.recommends}
    default:
      return state
  }
}

export default reducer