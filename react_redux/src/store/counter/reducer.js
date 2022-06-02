import { add, sub, inc, dec } from './constants'

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

export default countReducer