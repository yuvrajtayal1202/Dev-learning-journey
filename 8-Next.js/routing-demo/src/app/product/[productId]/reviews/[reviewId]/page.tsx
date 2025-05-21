import React from 'react'
  import notfound from './not-found'
const page = async ({params}: {params : Promise<{productId: string, reviewId: string}>}) => {
    const {reviewId, productId} = await params

    if(parseInt(reviewId) >1000){
      notfound()
    }
  return (
    <div>
      <h1>Review {reviewId} for Product {productId}</h1>
    </div>
  )
}

export default page
