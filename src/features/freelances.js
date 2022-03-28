import { selectFreelances } from '../utils/selectors'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'void',
  data:   null,
  error:  null
}

export async function fetchOrUpdateFreelances(dispatch, getState) {
  const status = selectFreelances(getState()).status
  if (status === 'pending' || status === 'updating') {
    return
  }
  dispatch(actions.fetching())
  try {
    const response = await fetch('http://localhost:8000/freelances')
    const data = await response.json()
    dispatch(actions.resolved(data))
  } catch (error) {
    dispatch(actions.rejected(error))
  }
}

const { actions, reducer } = createSlice({
  name:     'freelances',
  initialState,
  reducers: {
    fetching: (draft) => {
      if (draft.status === 'void') {
        draft.status = 'pending'
        return
      }
      if (draft.status === 'rejected') {
        draft.error = null
        draft.status = 'pending'
        return
      }
      if (draft.status === 'resolved') {
        draft.status = 'updating'
        return
      }
      return
    },
    resolved: (draft, actions) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.data = actions.payload
        draft.status = 'resolved'
        return
      }
      return
    },
    rejected: (draft, actions) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.error = actions.payload
        draft.data = null
        draft.status = 'rejected'
        return
      }
      return
    }
  }
})

export const { resolved, fetching, rejected } = actions
export default reducer
