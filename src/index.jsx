import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'

const rootElement = document.getElementById('root')

render(
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/survey/:questionNumber' element={<Survey />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>,
  rootElement
)
