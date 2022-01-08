import React from 'react'
import ReactDOM from 'react-dom'
import { render } from "react-dom"
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Survey from "./pages/Survey";

const rootElement = document.getElementById("root");

render(
    <Router>
        <Routes>
            <Route path="/"  element={<Home />}/>
            <Route path="/survey" element={<Survey />}/>
        </Routes>
    </Router>,
    rootElement
);
