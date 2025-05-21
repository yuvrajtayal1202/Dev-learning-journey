import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1>

      Hello World!!
        </h1>

        <Link href={'/blog'}>Bolog</Link>
        <br />
        <Link href={'/product'}>products</Link>
    </div>
  )
}

export default page
