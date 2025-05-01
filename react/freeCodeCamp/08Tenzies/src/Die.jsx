import React from 'react'

export default function Die(props) {
    const mystyle = {
        backgroundColor: props.isHeld == true ?"#b8fbb8": null
    }
  return (
<>
<button
 onClick={props.handleHold}
 style={mystyle} 
>{props.value}</button>
</>
  )
}
