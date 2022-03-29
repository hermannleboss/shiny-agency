import * as freelanceActions from './freelance'
import freelanceReducer from './freelance'

describe('Freelance Actions', () => {
  it.skip('should ', () => {
    expect(freelanceActions.fetching()).toEqual({
      type:    'freelance/fetching',
      payload: { freelanceId: 2 }
    })
  })
})

describe('Freelance Reducer', () => {
  it('should return the initial state when state is undefined', () => {
    expect(freelanceReducer(undefined, { type: '@INIT' })).toEqual({})
  })
  it('should add freelance id key on fetching', () => {
    expect(freelanceReducer({}, freelanceActions.fetching('1'))).toEqual({ 1: { status: 'pending' } })
  })
  it('should resolve freelance', () => {
    expect(freelanceReducer(
      { 1: { status: 'pending' } }, freelanceActions.resolved(1, {
        freelanceData: {
          id:        '1',
          name:      'Julien Brun',
          job:       'Développeur mobile',
          picture:   'http://localhost:8000/images/4.jpeg',
          skills:    ['React Native'],
          location:  'Lyon',
          available: true,
          tjm:       500
        }
      })
      )
    ).toEqual({
      1: {
        status: 'resolved',
        data:   {
          freelanceData: {
            id:        '1',
            name:      'Julien Brun',
            job:       'Développeur mobile',
            picture:   'http://localhost:8000/images/4.jpeg',
            skills:    ['React Native'],
            location:  'Lyon',
            available: true,
            tjm:       500
          }
        }
      }
    })
  })
})