import React, { useState } from 'react';
import productsFromFile from '../../data/products.json';

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);

  const deleteProduct = (index) => {
    productsFromFile.splice(index, 1);
    setProducts(productsFromFile.slice()); // Kopeerige massiiv enne uuendamist
  }

  return (
<div>
  <h2>Maintain products</h2>
  <table className='table'>
    <tbody>
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Description</th>
        <th>Rating</th>
        <th>Rating count</th>
        <th>Delete</th>
      </tr>
      {products.map((product, index) => (
        <tr key={index}>
          <td>{product.title}</td>
          <td>{product.category}</td>
          <td>{product.price}$</td>
          <td>{product.description}</td>
          <td>{product.rating.rate}</td>
          <td>{product.rating.count}</td>
          <td><button className='delete-btn' onClick={() => deleteProduct(index)}>x</button></td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}

export default MaintainProducts;
