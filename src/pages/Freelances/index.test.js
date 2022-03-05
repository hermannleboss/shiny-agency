import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'

import Freelances from './'
import { Wrapper } from '../../utils/test'

const freelancersMockedData = [
  {
    name:    'Harry Potter',
    job:     'Magicien frontend',
    picture: ''
  },
  {
    name:    'Hermione Granger',
    job:     'Magicienne fullstack',
    picture: ''
  }
]
const server = setupServer(
  // On précise ici l'url qu'il faudra "intercepter"
  rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
    // Là on va pouvoir passer les datas mockées dans ce qui est retourné en json
    return res(ctx.json({ freelancersList: freelancersMockedData }))
  })
)
test('Should render without crash', async () => {

  render(<Freelances />, { wrapper: Wrapper })
  expect(screen.getByTestId('loader')).toBeTruthy()
})
test('Should display freelancers names', async () => {
  render(<Freelances />, { wrapper: Wrapper })
  expect(screen.getByTestId('loader')).toBeTruthy()
  await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
  await waitFor(() => {
    expect(screen.getByText('Harry Potter')).toBeTruthy()
    expect(screen.getByText('Hermione Granger')).toBeTruthy()
  })
})
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('Should display freelancers names after loader is removed', async () => {
  render(<Freelances />)

  await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
  expect(screen.getByText('Harry Potter')).toBeInTheDocument()
  expect(screen.getByText('Hermione Granger')).toBeInTheDocument()
  expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
})
