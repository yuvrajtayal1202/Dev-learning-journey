'use client';
import React, {useState} from 'react'

export default function page() {
    const [name, setName ] = useState<string>('')
  return (
    <div>
      <h1>DashBoard</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello! {name}</p>
    </div>
  )
}
