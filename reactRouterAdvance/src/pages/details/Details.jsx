import React from 'react'
import { useParams } from 'react-router-dom'
export const Details = () => {

    const params=useParams();
  return (
    <div>Details
<p>Product Id:{params.productId}</p>


    </div>
  )
}
