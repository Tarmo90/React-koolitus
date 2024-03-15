import React, { useEffect } from 'react'
// import cartFile from '../../data/cart.json'
import { useState } from 'react'

function Cart() {
  

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
  const [parcelMachines, setParcelMachines] = useState([])

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
    .then(res => res.json())
    .then(body => setParcelMachines(body))
  }, []);

  const deleteOfCart = (index) => {
    cart.splice(index, 1);
    setCart(cart.slice()); //HTML uuenduseks
    localStorage.setItem('cart', JSON.stringify(cart)); //LocalStorage salvestuseks
  }

  const decreaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity - 1;
    if (cart[index].quantity === 0) {
      cart.splice(index, 1)
    }
    setCart(cart.slice());
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    setCart(cart.slice());
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const calculateTotal = () => {
    let sum = 0;
    cart.forEach(cp => sum = sum + cp.product.price * cp.quantity)
    return sum.toFixed(2);
  }

  const averageRating = () => {
    let sum = 0;
    cart.forEach(cp => sum = sum + cp.product.rating.rate)
    return (sum/cart.length).toFixed(2);
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

      
      <div>{cart.map((cp,index) => 
        <div key={index}>
          <div>{cp.product.title}</div> 
          
          <div>{cp.product.rating.rate} *</div>
          <div>{cp.product.price}$</div>
          <button onClick={() => decreaseQuantity(index)}>-</button>
          <div>{cp.quantity}</div>
          <button onClick={() => increaseQuantity(index)}>+</button>
          <div>{(cp.product.price * cp.quantity).toFixed(2)}$</div>
          <br />
          <button onClick={() => deleteOfCart(index)}>Delete</button> 
        </div> )}
      </div>

    {
      cart.length > 0 &&
      <React.Fragment>
    <div>Sum: {calculateTotal()} $</div>
      <div>Average: {averageRating()}</div>

      <select>
        {parcelMachines
        .filter(pm => pm.A0_NAME === 'EE')
        .map(pm =><option>{pm.NAME}</option>)}  
      </select>
    </React.Fragment>
    }
    </div>
  )
}

export default Cart