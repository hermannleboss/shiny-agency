import * as answerActions from './answers'
import answerReducer from './answers'

describe('Answer Action', () => {
  it('should save an asnwer', () => {
    expect(answerActions.saveAnswer({ questionNumber: 1, answer: true })).toEqual({
        type:    'answers/saveAnswer',
        payload: { answer: true, questionNumber: 1 }
      }
    )
  })
})

describe('Answer Reducer', () => {
  it('should return the initial state when state is undefined', () => {
    expect(answerReducer(undefined, { type: '@INIT' })).toEqual({})
  })

  it('should add answer', () => {
    expect(answerReducer({}, answerActions.saveAnswer({ questionNumber: 1, answer: true }))).toEqual({ 1: true })
    expect(answerReducer({ 1: false }, answerActions.saveAnswer({ questionNumber: 1, answer: true }))).toEqual({ 1: true })
    expect(answerReducer({ 1: false }, answerActions.saveAnswer({ questionNumber: 2, answer: true }))).toEqual({ 1: false, 2: true})
  })
})
