import React from 'react'
import { Metadata } from 'next'


type Props = {
  params: Promise<{productId: string}>
}

export const generateMetadata = async ({ params }: { params: { productId: string } }): Promise<Metadata> => {
  // You can implement metadata generation logic here
  return {
    title: `Product ${params.productId}`,
    description: `Details for product ${params.productId}`,
  };
}
   




const page =  async ({params}: {params : Promise<{productId: string}>}) => {
    const productId = (await  params).productId
  return (
    <div>
      <h1>This is product detailes {productId}</h1>
    </div>
  )
}

export default page
