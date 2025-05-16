import React from 'react'
import {createRoot} from 'react-dom/client'
import "./index.css"
const root = createRoot(document.getElementById("root"))
import  Navabar  from "./com/Navabar";
import  Main  from "./com/Main";
root.render(<>
 <Navabar/>
 <Main/>
</>)