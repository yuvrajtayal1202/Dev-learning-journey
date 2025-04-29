import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Main_Content from './Main-Content.jsx'

createRoot(document.getElementById('root')).render(
    <>
    <App />
    <Main_Content/>
    </>
)
