import React from 'react'
import Card from './'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('Card', () => {
  test('Should render title and image', async () => {
    render(
      <ThemeProvider>
        <Card
          title='Harry Potter'
          label='Magicien frontend'
          picture='/myPicture.png'
        />
      </ThemeProvider>
    )
    const cardPicture = screen.getByRole('img')
    const cardTitle = screen.getByText(/Harry/i)
    expect(cardPicture.src).toBe('http://localhost/myPicture.png')
    expect(cardTitle.textContent).toBe(' Harry Potter ')
  })
})
