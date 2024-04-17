import React, { useEffect, useRef, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { ToastContainer} from 'react-toastify'
import UseFetchProducts from '../../util/UseFetchProducts';
// import productFile from '../../data/products.json'


function AddProduct() {

  const [message, updateMessage] = useState<string>(""); 
  const [idUnique, setIdUnique] = useState<boolean>(false);

  const idRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null); 
  const priceRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null); 
  const descriptionRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  const [categories, setCategories] = useState<any[]>([])
  const {dbProducts, isLoading} = UseFetchProducts()
 
  useEffect(() => {
    const url = process.env.REACT_APP_CATEGORIES_URL
    if (url === undefined) {
      return
    }
    fetch(url)
    .then(res => res.json())
    .then(data => setCategories(data || []))
  }, []);


  const addProduct = () => { 
    if (titleRef.current === null || priceRef.current === null ||
      idRef.current === null || imageRef.current === null ||
      descriptionRef.current === null || categoryRef.current === null
    ) {
      return
    }
    if (titleRef.current.value === "") { 
      updateMessage('Cannot add a product with an empty name!');
      return;
    } 

    if (priceRef.current.value === "") { 
      updateMessage('Cannot add a product with an empty name!');
      return;
    } 

    dbProducts.push({
			id: Number(idRef.current.value),
			title: titleRef.current.value,
			price: Number(priceRef.current.value),
			description: descriptionRef.current.value,
			category: categoryRef.current.value,
			image: imageRef.current.value,
      active: false,
			rating: {
				rate: 0,
				count: 0,
			},
		});
    const url = process.env.REACT_APP_CATEGORIES_URL
    if (url === undefined) {
      return
    }
    fetch(url, {'method': 'PUT', 'body': JSON.stringify(dbProducts)})
  }

  const checkIdUniqueness = () => {
    const idInput = idRef.current
    if (idInput === null) {
      return
    }
    
    const index = dbProducts.findIndex(product => product.id === Number(idInput.value));
    if (index >= 0) { //teine varjant index >=0
      setIdUnique(true)  //ei ole disabled
    } else {
      setIdUnique(false); // on disabled
    }
  }

  if (isLoading) {
    return <div><Spinner/> Loading...</div>
  }

  return (
    <div className='textAligin'>
      <h2>Add product</h2>
      <br />
      <div>
      <label >Product ID: </label>
        <input onChange={checkIdUniqueness} ref={idRef} type='number' />
        <br /> <br />
      <label >Product title: </label>
        <input ref={titleRef} type='text' />
        <br /> <br />
        <label >Product price: </label>
        <input ref={priceRef} type="number"  />
        <br /> <br />
        <label >Product img: </label>
        <input ref={imageRef} type='text' />
        <br /><br />
        <label >Description: </label>
        <input ref={descriptionRef} type='text' />
        <br /> <br />
        <label >Category: </label>
        {/* <input  type='text' /> */}
        
        <select ref={categoryRef}>
          {categories.map(category => (<option key={category.name}>{category.name}</option>
        ))}
        </select>
        <br /> <br />
        
        <br /> <br />
        <button disabled={idUnique === true} onClick={addProduct}>Add</button>

        <p style={{ color:'red', background: 'lightgray' }}>
          {message}
        </p>

        <ToastContainer/>
      </div>
    </div>
  )
}

export default AddProduct