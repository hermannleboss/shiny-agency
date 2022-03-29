import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render } from '../../utils/test'
import { screen, waitForElementToBeRemoved } from '@testing-library/react'

import Freelances from './'

const freelancersMockedData = [
  {
    id:      1,
    name:    'Harry Potter',
    job:     'Magicien frontend',
    picture: ''
  },
  {
    id:      2,
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
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('Should display freelancers names after loader is removed', async () => {
  render(<Freelances />)
  await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
  expect(screen.getByText('Harry Potter')).toBeInTheDocument
  expect(screen.getByText('Hermione Granger')).toBeInTheDocument
  expect(screen.queryByTestId('loader')).not.toBeInTheDocument
})