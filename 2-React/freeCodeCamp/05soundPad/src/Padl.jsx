import React from 'react'

export default function Pad(props){
console.log(props.id)
    return(
        <button 
        className={props.on? "on":null} 
        style = {{backgroundColor: props.color}}
        onClick={() => props.toggle(props.id)}
        ></button>

    )
}