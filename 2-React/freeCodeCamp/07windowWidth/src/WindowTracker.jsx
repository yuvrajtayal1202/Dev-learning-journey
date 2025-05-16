import React from 'react'

export default function WindowTracker(){
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    React.useEffect(function(){
        window.addEventListener("resize", function(){
            setWindowWidth(this.window.innerWidth)
        })
}, [])
    return(
   <h1>Window Width: {windowWidth}</h1>

    )
}