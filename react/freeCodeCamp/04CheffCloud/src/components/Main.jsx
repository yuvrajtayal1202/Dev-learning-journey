import React from 'react'

export default function Main() {
  return (
<main className="main">
    <form >
        <input 
        aria-label='Add ingredient' 
        type="text" 
        placeholder='e.g. oregano' 
        />
        <button>+ Add ingredient</button>
    </form>
</main>
  )
}

