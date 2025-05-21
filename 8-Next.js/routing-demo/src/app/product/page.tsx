import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h2>product list</h2>
      <Link href={'/product/1'}>
      <h1>Product 1</h1>
      </Link>
      <Link href={'/product/2'}>
      <h1>Product 2</h1>
      </Link>
      <Link href={'/product/3'}>
      <h1>Product 3</h1>
      </Link>

      <Link href={'/'}>Home</Link>
    </div>
  )
}

export default page
