import React from 'react'
import cartFile from '../../data/cart.json'
import { useState } from 'react'

function Cart() {
  

  const [cart, setCart] = useState(cartFile)

  const deleteOfCart = (index) => {
    cartFile.splice(index, 1);
    setCart(cartFile.slice())
  }

  const addOfCart = (product) => {
    cartFile.push(product);
    setCart(cartFile.slice());
  }

  const calculateTotal = () => {
    let sum =0;
    cart.forEach(product => sum = sum + product.price)
    return sum;
  }

  
  return (
    <div>
      <div>Cart</div>
      <div>Carts is: {cart.length} product</div>

      {cart.length === 0 && 
      <div className='cart'>
        <p>The shopping cart ise currently empty.</p>
      </div>}

      <button onClick={() => setCart([])}>Clean</button> 

      
      <div>{cart.map((product,index) => 
        <div key={index}>
          {product.id} {product.price}$
          <button onClick={() => deleteOfCart(index)}>x</button> 
           <button onClick={() => addOfCart(product)}>Add to end</button> 

        </div> )}
      </div>

      <div>Sum: {calculateTotal()} $</div>
    </div>
  )
}

export default Cart