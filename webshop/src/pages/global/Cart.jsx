import React, { useEffect, useState } from 'react';

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [parcelMachines, setParcelMachines] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('EE');

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(body => setParcelMachines(body));
  }, []);

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

  const filterParcelMachines = (countryCode) => {
    return parcelMachines.filter(pm => pm.A0_NAME === countryCode);
  };

  return (
    <div className='textAligin'>
      <div>Cart</div>
      <div>Carts is: {cart.length} product</div>

      {cart.length === 0 && 
        <div className='cart'>
          <p>The shopping cart is currently empty.</p>
        </div>
      }

      <button onClick={() => setCart([])}>Clean</button> 

      {cart.length > 0 &&
        <>
          <div>Sum: {calculateTotal()} $</div>
          <div>Average: {averageRating()}</div>

          <button onClick={() => setSelectedCountry('EE')}>Estonia</button>
          <button onClick={() => setSelectedCountry('LV')}>Latvia</button>
          <button onClick={() => setSelectedCountry('LT')}>Lithuania</button>

          <select>
            {filterParcelMachines(selectedCountry).map(pm => <option>{pm.NAME}</option>)}
          </select>
        </>
      }

      {cart.map((cp, index) => (
        <div key={index}>
          <div>{cp.product.title}</div> 
          <img src={cp.product.image} alt={cp.product.title} style={{ width: "100px", height: "100px" }} />
          <div>{cp.product.rating.rate} *</div>
          <div>{cp.product.price}$</div>
          <br />
          <button onClick={() => decreaseQuantity(index)}>-</button>
          <div>{cp.quantity}</div>
          <button onClick={() => increaseQuantity(index)}>+</button>
          <div>{(cp.product.price * cp.quantity).toFixed(2)}$</div>
          <br />
          <button onClick={() => deleteFromCart(index)}>Delete</button> 
        </div>
      ))}
    </div>
  );
}

export default Cart;
