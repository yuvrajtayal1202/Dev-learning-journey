import {useState, useCallback} from 'react'

import "./App.css";

function App() {
  let [length, setLength] = useState(8)
  let [numbera, setNumbera] = useState(false)
  let [chara, setChara] = useState(true)
  let [Password, setPassword] = useState("")
  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"
 if(numbera) str += "0123456789"
 if(chara) str += "@#!$%^&*()__+={}[]`~"


 for (let i = 1; i <= length; i++) {
  let char = Math.floor(Math.random() * str.length() +1)
pass = str.charAt(char)
 }
 setPassword(pass)

  }, [length, numbera, chara, setPassword])
  return <>
   <div className='outer' >
    <div className="inner">

   
    </div>
   </div>
  </>;
}

export default App;
