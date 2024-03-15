import React, { useState } from 'react';
import productsFromFile from '../../data/products.json';
// import cartFile from '../../data/cart.json';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  const sortedAZ = () => {
    const sortedProducts = [...products].sort((a, b) => a.title.localeCompare(b.title));
    setProducts(sortedProducts);
  }

  const sortedZA = () => {
    const sortedProducts = [...products].sort((b, a) => a.title.localeCompare(b.title));
    setProducts(sortedProducts);
  }

  const sortedLowToHigh = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  }

  const sortedHightoLow = () => {
    const sortedProducts = [...products].sort((b, a) => a.price - b.price);
    setProducts(sortedProducts);
  }

  const sortedRatingLowtoHigh = () => {
    const sortedProducts = [...products].sort((a, b) => a.rating.rate - b.rating.rate);
    setProducts(sortedProducts);
  }

  const sortedRatingHightoLow = () => {
    const sortedProducts = [...products].sort((b, a) => a.rating.rate - b.rating.rate);
    setProducts(sortedProducts);
  }

  const filterByStartingLetter = (startLetter) => {
    const result = productsFromFile.filter(product => product.title.startsWith(startLetter));
    setProducts(result);
  }

  const filterByMen = (category) => {
    const result = productsFromFile.filter(product => product.category === category)
    setProducts(result)
  }

  const filterByWomen = (category) => {
    const result = productsFromFile.filter(product => product.category === category)
    setProducts(result)
  }

  const filterByJewelery = (category) => {
    const result = productsFromFile.filter(product => product.category === category)
    setProducts(result)
  }

  const filterByElectronics = (category) => {
    const result = productsFromFile.filter(product => product.category === category)
    setProducts(result)
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

    toast.success(`${addedProduct.title} successfully added to the cart`, {
      position: 'bottom-right'
    });
  }


  return (
    <div className='textAligin'>
      <div>
      <div>{products.length} tk</div>

      <button onClick={() => filterByMen("men's clothing")}>men's clothing</button>
      <button onClick={() => filterByWomen("women's clothing")}>women's clothing</button>
        <button onClick={() => filterByJewelery("jewelery")}>jewelery</button>
        <button onClick={() => filterByElectronics("electronics")}>electronics</button>
        <br />
        <button onClick={sortedAZ}>Sorted A-Z</button>
        <button onClick={sortedZA}>Sorted Z-A</button>
        <button onClick={sortedLowToHigh}>Sorted low to high</button>
        <button onClick={sortedHightoLow}>Sorted high to low</button>
        <button onClick={sortedRatingLowtoHigh}>Sorted by rating low to high</button>
        <button onClick={sortedRatingHightoLow}>Sorted by rating high to low</button>
        <br />
        <button onClick={() => filterByStartingLetter('A')}>Keep products starting with A</button>
        <button onClick={() => filterByStartingLetter('B')}>Keep products starting with B</button>
        {/* Add more buttons here as needed */}
      </div>
      
      {products.map((product, index) => 
        <div key={product.id}>
          <img style={{ width: '100px' }} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price}</div>
          <div>{product.category}</div>
          <div>{product.rating.rate}</div>
         
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