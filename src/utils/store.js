import { combineReducers, createStore } from 'redux'
import themeReducer from '../features/theme'
import freelancesReducer from '../features/freelances'

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const reducer = combineReducers({
  theme:      themeReducer,
  freelances: freelancesReducer
})

const store = createStore(reducer, reduxDevtools)

export default store
