import * as freelancesActions from './freelances'
import freelancesReducer from './freelances'

describe('Freelances Actions', () => {
  it.skip('should ', () => {
    expect(freelancesActions.fetching()).toEqual({
      type:    'freelances/fetching',
      payload: { freelanceId: 2 }
    })
  })
})

describe('Freelances Reducer', () => {
  it('should return the initial state when state is undefined', () => {
    expect(freelancesReducer(undefined, { type: '@INIT' }))
      .toEqual({ status: 'void', data: null, error: null })
  })
  it('should set status on pending when freelancesAction is fetching', () => {
    expect(freelancesReducer(
      { status: 'void', data: null, error: null },
      freelancesActions.fetching()))
      .toEqual({ status: 'pending', data: null, error: null })
  })
  it('should resolve freelance', () => {
    expect(freelancesReducer(
      { status: 'pending', data: null, error: null },
      freelancesActions.resolved({
        freelancersList: []
      })
      )
    ).toEqual({ status: 'resolved', data: { freelancersList: [] }, error: null })
  })

  it('should resolved freelance 2', () => {
    const state = freelancesReducer(
      { data: null, error: null, status: 'pending' },
      freelancesActions.resolved({
        freelancersList: []
      })
    )
    expect(state.status).toBe('resolved')
  })

  it('should switch to update when fetching on resolved', () => {
    expect(freelancesReducer(
      { status: 'resolved', data: { freelancersList: [] }, error: null },
      freelancesActions.fetching()
      )
    ).toEqual({ status: 'updating', data: { freelancersList: [] }, error: null })
  })

  it('should switch to updating when fetching on resolved 2 ', () => {
    const state = freelancesReducer(
      { data: [], error: null, status: 'resolved' },
      freelancesActions.fetching()
    )
    expect(state.status).toBe('updating')
    expect(state.data).toEqual([])
  })

  it('should ignore rejected on resolved', () => {
    expect(freelancesReducer(
      { status: 'resolved', data: { freelancersList: [] }, error: null },
      freelancesActions.rejected('oops something wrong')
      )
    ).toEqual({ status: 'resolved', data: { freelancersList: [] }, error: null })
  })

  it('should ignore rejected on resolved 2', () => {
    const state = freelancesReducer(
      { data: [], error: null, status: 'resolved' },
      freelancesActions.rejected('Oops')
    )
    expect(state.status).toBe('resolved')
    expect(state.data).toEqual([])
  })
})