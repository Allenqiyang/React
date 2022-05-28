import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer.js'


const storeEnhancer = applyMiddleware(thunk)

const store = createStore(reducer, storeEnhancer)

export default store