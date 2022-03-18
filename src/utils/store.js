import { combineReducers, createStore } from 'redux'
import themeReducer from '../features/theme'

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const reducer = combineReducers({
  theme: themeReducer
})

const store = createStore(reducer, reduxDevtools)

export default store
