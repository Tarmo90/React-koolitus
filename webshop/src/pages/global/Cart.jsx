import React, { useContext, useState } from 'react';
import styles from '../../css/Cart.module.css';
// import Icon from '@mui/material/Icon';
import Grade from '@mui/icons-material/Grade';
import ParcelMachines from '../../components/cart/ParcelMachines';
import Payment from '../../components/cart/Payment';
import { CartSumContext } from '../../store/CartSumContext';
import { calculateTotal } from '../../util/CalculatationUtil';


function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const {setCartSum} = useContext(CartSumContext)
  

  const deleteFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartSum(calculateTotal(cart));
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity--;
    if (updatedCart[index].quantity === 0) {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartSum(calculateTotal(cart));
  };

  const clearCart = () => {
		cart.splice(0);
		setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(0);
	};
  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity++;
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };



  const averageRating = () => {
    let sum = 0;
    cart.forEach(cp => sum += cp.product.rating.rate);
    return (sum / cart.length).toFixed(2);
  };

  

  return (
    <div className={styles.textAligin}>
      <div className={styles.cart_top}>
      <div>Cart</div>
      <div>Carts is: {cart.length} product</div>

      {cart.length === 0 && 
        <div className={styles.cart}>
          <p>The shopping cart is currently empty.</p>
        </div>
      }

      <button onClick={clearCart}>Clean</button> 
      </div>

      {cart.map((cp, index) => (
        <div className={styles.product} key={index}>
          <img className={styles.image} src={cp.product.image} alt=''/>
          <div className={styles.title}>{cp.product.title} *</div>
          <div className={styles.rate}>{cp.product.rating.rate} <Grade/></div>
          <div className={styles.price}>{cp.product.price}$</div>
          
          <div className={styles.quantity}>
          <img className={styles.button} onClick={() => decreaseQuantity(index)} src="/minus.png" alt="" />
          <div >{cp.quantity}tk </div>
          <img className={styles.button} onClick={() => increaseQuantity(index)} src="/plus.png" alt="" />
          </div>
          
          <div className={styles.total}>{(cp.product.price * cp.quantity).toFixed(2)}$</div>
          
          <img className={styles.button} onClick={() => deleteFromCart(index)} src="/remove.png" alt="" />
        </div>
      ))}

     <div className={styles.cart_bottom}>
     {cart.length > 0 &&
        <>
          <div>Sum: {calculateTotal(cart)} $</div>
          <div>Average: {averageRating()} <Grade/></div>

         <ParcelMachines/>
          <Payment sum={calculateTotal(cart)}/>
        </>
      }
     </div>
    </div>
  );
}

export default Cart;
