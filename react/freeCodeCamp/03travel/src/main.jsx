import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import data from './data'


const Entry =  data.map((value, index) => {
    return( 
    <MainContent 
    key = {value.id}
    entry = {value}
    // img = {value.img.src} 
    // alt = {value.img.alt} 
    // country = {value.country} 
    // heading = {value.title} 
    // date  = {value.dates}
    // link = {value.googleMapsLink} 
    // description = {value.text}
    />
)
  })
 

createRoot(document.getElementById('root')).render(
    <>
    <div className="container">
    <Header/>
    {Entry}
    </div>
    </>
)
