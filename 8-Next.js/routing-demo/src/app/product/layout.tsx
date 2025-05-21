import React from 'react'

export default function layout({children} :
    {children: React.ReactNode}
) {
  return (
    <div>
        {children}
      <h1>Featured Products</h1>
    </div>
  )
}
