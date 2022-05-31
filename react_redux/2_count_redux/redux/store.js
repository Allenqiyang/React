import {legacy_createStore as createStore} from 'redux'
import reducer from './count_reducer'

export default createStore(reducer)