import React from 'react'

const page =  async ({params}: {params : Promise<{productId: string}>}) => {
    const productId = (await  params).productId
  return (
    <div>
      <h1>This is product detailes {productId}</h1>
    </div>
  )
}

export default page
