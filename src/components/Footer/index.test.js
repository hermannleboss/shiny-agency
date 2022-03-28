import React from 'react'
import Footer from './'
import { render } from '../../utils/test'
import { fireEvent, screen } from '@testing-library/react'

describe('Footer', () => {
  test('Should render without crash', async () => {
    render(<Footer />)
  })

  test('should change theme', async () => {
    render(<Footer />)
    const nightModeButton = screen.getByRole('button')
    expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
    fireEvent.click(nightModeButton)
    expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
  })
})