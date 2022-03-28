import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

export function Wrapper({ children }) {
  return <MemoryRouter {...options}>{children}</MemoryRouter>
}

export function render(ui) {
  rtlRender(ui, { wrapper: Wrapper })
}