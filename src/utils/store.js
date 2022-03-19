import { combineReducers, createStore } from 'redux'
import themeReducer from '../features/theme'
import freelancesReducer from '../features/freelances'
import surveyReducer from '../features/survey'
import freelanceReducer from '../features/freelance'

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const reducer = combineReducers({
  theme:      themeReducer,
  freelances: freelancesReducer,
  survey:     surveyReducer,
  freelance:  freelanceReducer
})

const store = createStore(reducer, reduxDevtools)

export default store
