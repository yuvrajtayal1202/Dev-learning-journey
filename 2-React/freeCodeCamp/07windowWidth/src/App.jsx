import React from "react"
import WindowTracker from "./WindowTracker"

export default function App() {
  const [show, setShow] = React.useState(true)
const toggle = function(){
  setShow(prev => !prev)
}
return(
  <div className="container">
  
  <button onClick={toggle}>Toggle width</button>

  {show && <WindowTracker/>}
  </div>
)
}