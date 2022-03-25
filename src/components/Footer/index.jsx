import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import EmailInput from '../EmailInput'
import { useDispatch, useSelector } from 'react-redux'
import * as themeActions from '../../features/theme'
import { selectTheme } from '../../utils/selectors'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
  padding-top: 30px;
`

function Footer() {

  const theme = useSelector(selectTheme)
  const dispatch = useDispatch()

  return (
    <FooterContainer>
      <EmailInput theme={theme} />
      <NightModeButton onClick={() => dispatch(themeActions.toggle())}>
        Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
    </FooterContainer>
  )
}

export default Footer
