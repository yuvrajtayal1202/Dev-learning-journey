import React from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import MainContent from './components/MainContent'

createRoot(document.getElementById('root')).render(
    <>
    <div className="container">

    <Header/>
    <MainContent/>
    </div>
    </>
)
