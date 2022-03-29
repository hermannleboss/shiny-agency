import themeReducer from '../features/theme'
import { configureStore } from '@reduxjs/toolkit'
import answersReducer from '../features/answers'

export default configureStore({
  reducer: {
    theme:   themeReducer,
    answers: answersReducer
  }
})

