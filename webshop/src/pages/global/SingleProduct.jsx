import React from 'react'
import productFile from '../../data/products.json'
import { useParams } from 'react-router-dom'



function SingleProduct() {

  const {index} = useParams();
  const found = productFile[index]

  if (found === undefined) {
    return <div>Product not found</div>
  }
   
  return (
    <div>
      {found.active === false && <div>Product is inactive</div>}
      <h3>Title: {found.title}</h3>
      <hr />
      <div>Price: {found.price} $</div>
      <div>Description: {found.description}</div>
      <div>Category: {found.category}</div>
      <br />
      <td>Rating: {found.rating.rate}</td>
      <td>Rating count: {found.rating.count}</td>

      <img src={found.image} alt="" />
      
    </div>
  )
}

export default SingleProduct