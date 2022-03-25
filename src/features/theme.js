import { createAction, createSlice } from '@reduxjs/toolkit'

// action creators

export const toggleTheme = createAction('theme/toggle')
export const setTheme = createAction('theme/set')
setTheme('light')

const themeSlice = createSlice({
  name:         'theme',
  initialState: 'light',
  reducers:     {
    toggle: (state) => {
      return state === 'light' ? 'dark' : 'light'
    },
    set:    (state, action) => {
      return action.payload
    }
  }
})

// on extrait les actions et le reducer
const { actions, reducer } = themeSlice
// on export chaque action individuellement
export const { set, toggle } = actions
// on export le reducer comme default export
export default reducer
