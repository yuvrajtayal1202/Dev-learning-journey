import { useState } from 'react'
import './index.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-full">
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
    </div>
    </>
  )
}

export default App
