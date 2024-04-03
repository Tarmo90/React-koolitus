import React, { useEffect, useRef, useState } from 'react';
// import productsFromFile from '../../data/products.json';
import { useNavigate, useParams } from 'react-router-dom';

function EditProduct() {
  const { productId } = useParams();
  // const product = productsFromFile.find(product => product.id === Number(productId));
  const idRef = useRef();
  const titleRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const ratingRef = useRef();
  const ratingCountRef = useRef();

  const navigate = useNavigate();

  const [categories, setCategories] = useState([])

  const[dbProducts, setDbProducts] = useState([])
  

  // 1. Peab algama use eesliidesega
  // 2. Peab olema imporditud
  // 3. Alati sulud lõpus - see käivitatakse
  // 4. Ei tohi olla funktsiooni sees tehtud
  // 5. Ei tohi olla tingimuslikult tehtud
  
  useEffect(() => {
    fetch(process.env.REACT_APP_PRODUCTS_URL)
    .then(res => res.json())
    .then(data => {
      setDbProducts(data || []);
     
    })
  }, [dbProducts]);
 
  useEffect(() => {
    fetch(process.env.REACT_APP_CATEGORIES_URL)
    .then(res => res.json())
    .then(data => setCategories(data || []))
  }, []);
  // if (product === undefined) {
  // return <div>Toodet ei leitud</div>;
  // }

  const change = () => {
    const index = dbProducts.findIndex(product => product.id === Number(productId))

    dbProducts[index] = {
      "id": idRef.current.value,
      "title": titleRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "image": imageRef.current.value,
      "rating": {
        "rate": Number(ratingRef.current.value),
        "count": Number(ratingCountRef.current.value)
      }
    };
    navigate("/admin/maintain-products")
    fetch(process.env.REACT_APP_PRODUCTS_URL, {'method': 'PUT', 'body': JSON.stringify(dbProducts)})

  };

  return (
    <div className='App'>
      <label>ID</label><br />
      <input ref={idRef} defaultValue={dbProducts?.id} type="number" /><br />
      <label>Name</label><br />
      <input ref={titleRef} defaultValue={dbProducts?.title} type="text" /><br />
      <label>Category</label><br />
      <input ref={categoryRef} defaultValue={dbProducts?.category} type="text" /><br />
      <label>Price</label><br />
      <input ref={priceRef} defaultValue={dbProducts?.price} type="number" /><br />
      <label>Description</label><br />
      <input ref={descriptionRef} defaultValue={dbProducts?.description} type="text" /><br />
      <label>Image</label><br />
      <input ref={imageRef} defaultValue={dbProducts?.image} type="text" /><br />
      <label>Rating</label><br />
      <input ref={ratingRef} defaultValue={dbProducts?.rating?.rate || ''} type="number" /><br />
      <label>Rating count</label><br />
      <input ref={ratingCountRef} defaultValue={dbProducts?.rating?.count || ''} type="number" /><br /><br />
      <label>Category: </label>
      <select ref={categoryRef}>
        {categories.map(category => (<option key={category.name}>{category.name}</option>))}
      </select>
      <br /> <br />
      <button onClick={change} className='edit-btn'>Muuda</button>
    </div>
  );
}

export default EditProduct;