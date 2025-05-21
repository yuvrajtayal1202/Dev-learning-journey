'use client';
import React from 'react'
import { usePathname } from 'next/navigation'
export default function notfound() {
    const pathName = usePathname()
    const productId = pathName.split('/')[2]
    const reviewId = pathName.split('/')[4]
  return (
    <div>
      <h1>Revies not found</h1>
    </div>
  )
}
