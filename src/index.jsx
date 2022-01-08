import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'

ReactDOM.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>,
    document.getElementById('root')
)


/**
 * ReactDOM.render(
 <React.StrictMode>
 <Router>
 <Route path="/">
 <Home/>
 </Route>
 <Route path="/survey">
 <Survey/>
 </Route>
 </Router>
 </React.StrictMode>,
 document.getElementById('root')
 )

 */