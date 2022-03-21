import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { selectTheme } from '../selectors'
import { useSelector } from 'react-redux'

export const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }

  body {
    background-color: ${({ isDarkMode }) =>
  isDarkMode ? '#2F2E41' : 'white'};
    margin: 0;
  }
`

function GlobalStyle() {
  const theme = useSelector(selectTheme)
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
