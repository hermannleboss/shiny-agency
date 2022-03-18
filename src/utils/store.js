import { combineReducers, createStore } from 'redux'
import themeReducer from '../features/theme'
import freelancesReducer from '../features/freelances'
import surveyReducer from '../features/survey'

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const reducer = combineReducers({
  theme:      themeReducer,
  freelances: freelancesReducer,
  survey:     surveyReducer
})

const store = createStore(reducer, reduxDevtools)

export default store
