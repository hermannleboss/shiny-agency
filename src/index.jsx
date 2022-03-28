import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Freelances from './pages/Freelances'
import Results from './pages/Results'
import { SurveyProvider } from './utils/context'
import Footer from './components/Footer'
import GlobalStyle from './utils/style/GlobalStyle'
import Profile from './pages/Profile'
import { Provider } from 'react-redux'
import store from './utils/store'

const rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/freelances' element={<Freelances />} />
          <Route path='/profile/:id' element={<Profile />}> </Route>
          <Route path='/survey/:questionNumber' element={<Survey />} />
          <Route path='/results' element={<Results />} />
          <Route path='*' element={<Error />} />
        </Routes>

        <Footer />
    </Router>
  </Provider>,
  rootElement
)
