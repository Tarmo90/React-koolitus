import React, { useRef, useState } from 'react';
import productsFromFile from '../../data/products.json';
import { Link } from 'react-router-dom';

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);

  const deleteProduct = (index) => {
    productsFromFile.splice(index, 1);
    setProducts(productsFromFile.slice()); 
  }

  const searchRef = useRef();

  const searchFromProducts = () => {
    const result = productsFromFile.filter(product => product.title.includes(searchRef.current.value));
    setProducts(result);
  }

  return (
<div>
  <input ref={searchRef} onChange={searchFromProducts} type="text" />
  <span>{products.length}</span>

  <table>
    <tbody>
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Description</th>
        <th>Rating</th>
        <th>Rating count</th>
        <th>Delete</th>
        <th>Change</th>
      </tr>
      {products.map((product, index) => (
        <tr key={index}>
          <td>{product.title}</td>
          <td>{product.category}</td>
          <td>{product.price}$</td>
          <td>{product.description}</td>
          <td>{product.rating.rate}</td>
          <td>{product.rating.count}</td>
          <td><button className='delete-btn' onClick={() => deleteProduct(index)}>Delete</button></td>
    
          <td><Link to={'/admin/edit-product/' + index}>
          <button className='delete-btn' >Change</button>
          </Link></td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}

export default MaintainProducts;
