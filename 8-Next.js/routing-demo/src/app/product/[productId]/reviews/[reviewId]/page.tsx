import React from 'react'
  
const page = async ({params}: {params : Promise<{productId: string, reviewId: string}>}) => {
    const {reviewId, productId} = await params
  return (
    <div>
      <h1>Review {reviewId} for Product {productId}</h1>
    </div>
  )
}

export default page
