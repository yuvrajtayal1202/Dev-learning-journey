import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputBox } from "./com/InputBox";
import { useCurrrencyInfo } from "./hooks/useCurrencyInfo";

function App() {
const [amount, setAmount] = useState(0)
const [form, setForm] = useState("inr")
const [to, setTo] = useState("usd")
const [conv, setconv] = useState(0)

const currencyInfo = useCurrrencyInfo(from)
 
const options = Object.keys(currencyInfo)

const swap = () =>{
  setForm(to)
  setForm(from)
  setconv(amount)
  setAmount(conv)
}
return (
    <>
      <h1 >
       Currency converter
      </h1>
    </>
  )
}

export default App
