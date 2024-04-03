import React, { useState } from 'react';
import '../../css/Cart.css';
// import Icon from '@mui/material/Icon';
import Grade from '@mui/icons-material/Grade';
import ParcelMachines from '../../components/ParcelMachines';


function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  

  const deleteFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity--;
    if (updatedCart[index].quantity === 0) {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity++;
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    let sum = 0;
    cart.forEach(cp => sum += cp.product.price * cp.quantity);
    return sum.toFixed(2);
  };

  const averageRating = () => {
    let sum = 0;
    cart.forEach(cp => sum += cp.product.rating.rate);
    return (sum / cart.length).toFixed(2);
  };

  const pay = () => {
    const paymentUrl = "https://igw-demo.every-pay.com/api/v4/payments/oneoff"
    const paymentData = {
        "api_username": "92ddcfab96e34a5f",
        "account_name": "EUR3D1",
        "amount": calculateTotal(),
        "order_reference": Math.random() * 9999999,
        "nonce": "a9b7f" + new Date() + Math.random() * 9999999,
        "timestamp": new Date(),
        "customer_url": "https://tarmo-webshop.web.app"  
    }

    const paymentHeaders = {
      "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
      "Content-Type": "application/json"
    }

    fetch(paymentUrl, {
      "method": "POST", 
      "body": JSON.stringify(paymentData), 
      "headers": paymentHeaders
    }).then(res => res.json())
      .then(json => window.location.href = json.payment_link)
  }

  return (
    <div className='textAligin'>
      <div className='cart-top'>
      <div>Cart</div>
      <div>Carts is: {cart.length} product</div>

      {cart.length === 0 && 
        <div className='cart'>
          <p>The shopping cart is currently empty.</p>
        </div>
      }

      <button onClick={() => setCart([])}>Clean</button> 
      </div>

      {cart.map((cp, index) => (
        <div className='product' key={index}>
          <img className='image' src={cp.product.image} alt=''/>
          <div className='title'>{cp.product.title} *</div>
          <div className='rate'>{cp.product.rating.rate} <Grade/></div>
          <div className='price'>{cp.product.price}$</div>
          
          <div className='quantity'>
          <img className='button' onClick={() => decreaseQuantity(index)} src="/minus.png" alt="" />
          <div >{cp.quantity}tk </div>
          <img className='button' onClick={() => increaseQuantity(index)} src="/plus.png" alt="" />
          </div>
          
          <div className='total'>{(cp.product.price * cp.quantity).toFixed(2)}$</div>
          
          <img className='button' onClick={() => deleteFromCart(index)} src="/remove.png" alt="" />
        </div>
      ))}

     <div className='cart-bottom'>
     {cart.length > 0 &&
        <>
          <div>Sum: {calculateTotal()} $</div>
          <div>Average: {averageRating()} <Grade/></div>

         <ParcelMachines/>
          <button onClick={pay}>Maksa</button>
        </>
      }
     </div>
    </div>
  );
}

export default Cart;
