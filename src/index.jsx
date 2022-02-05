import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Freelances from './pages/Freelances'
import Results from './pages/Results'
import { createGlobalStyle } from 'styled-components'

const rootElement = document.getElementById('root')
const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }

  body {
    margin: 0;
  }
`
render(
  <Router>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/freelances' element={<Freelances />} />
      <Route path='/survey/:questionNumber' element={<Survey />} />
      <Route path='/results' element={<Results />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>,
  rootElement
)
