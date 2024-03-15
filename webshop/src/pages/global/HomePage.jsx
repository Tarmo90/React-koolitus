import React, { useState } from 'react';
import productsFromFile from '../../data/products.json';
// import cartFile from '../../data/cart.json';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  const filterByStartingLetter = (startLetter) => {
    const result = productsFromFile.filter(product => product.title.startsWith(startLetter));
    setProducts(result);
  }

  const addToCart = (addedProduct) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];


    //kui on ostukorvis olemas, siis suurendan kogust
    const index = cart.findIndex(cp => cp.product.id === addedProduct.id)
    if (index !== -1) { //kui ei leia siis on index -1
      cart[index].quantity = cart[index].quantity + 1

    } else {
    cart.push({"product":addedProduct, 'quantity': 1});
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));

    toast.success('Product successfully added to the cart');
  }

  return (
    <div>
      <div>
      <div>{products.length} tk</div>

        <button>men's clothing</button>
        <button>jewelery</button>
        <button>electronics</button>
        <button>women's clothing</button>
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


// sorteerimine A-Z, Z-A, hind kasvavalt, hind kahanevalt
  // sorteerimine reitingu alusel

  // filtreerimine -> kategooria alusel

  // lisage toast, mis ütleb toote nimetuse, mis läheb ostukorvi