import React from 'react'
import productsFromFile from '../../data/products.json'
import { useState } from 'react'

function HomePage() {
  const [products, setProducts] = useState(productsFromFile)

  return (
    <div>
      {products.map(product => 
        <div key={product.id}>
          <img style={{width: '100px'}} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price}</div>
        </div>
        )}
    </div>
  )
}

export default HomePage