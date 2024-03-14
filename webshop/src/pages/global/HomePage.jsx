import React, { useState } from 'react';
import productsFromFile from '../../data/products.json';
import cartFile from '../../data/cart.json';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  const filterByStartingLetter = (startLetter) => {
    const result = productsFromFile.filter(product => product.title.startsWith(startLetter));
    setProducts(result);
  }

  const addToCart = (addedProduct) => {
    cartFile.push(addedProduct);
    toast.success('Product successfully added to the cart');
  }

  return (
    <div>
      <div>
        <button onClick={() => filterByStartingLetter('A')}>Keep products starting with A</button>
        <button onClick={() => filterByStartingLetter('B')}>Keep products starting with B</button>
        {/* Add more buttons here as needed */}
      </div>
      
      {products.map((product, index) => 
        <div key={product.id}>
          <img style={{ width: '100px' }} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price}</div>
          

          <Link to={"/product/" + index}>
            <button>See more</button>
          </Link>
          <button disabled={product.active} onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      )}
      <ToastContainer/>
    </div>
  );
}

export default HomePage;
