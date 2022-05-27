import { add, sub, inc, dec } from './constant.js'

const initialState = {
  counter: 0
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
    default:
      return state
  }
}

export default reducer