import React, { useEffect, useState } from 'react'

function Tooted() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => setProducts(json.products))
  }, []);

  return (
    <div>
      {products.map(products => 
        <div key={products.id}>
          <div>{products.id}</div>
          <div>{products.title}</div>
          <div>{products.description}</div>
          <div>{products.price}</div>
          <div>{products.discountPrecentage}</div>
          <div>{products.rating}</div>
          <div>{products.stock}</div>
          <div>{products.brand}</div>
          <div>{products.category}</div>
          <img src={products.thumbnail} alt="" /><br /><br />
          {/* <div>{products.images}</div><br /> */}
        </div>

        )}
    </div>
  )
}

export default Tooted