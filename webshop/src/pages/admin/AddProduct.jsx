import React, { useRef, useState } from 'react'
import { ToastContainer} from 'react-toastify'
import productFile from '../../data/products.json'


function AddProduct() {

  const [message, updateMessage] = useState(""); 
  const inputReader = useRef(); 
  const priceReader = useRef();
  const imageRef = useRef(); 
  const descriptionRef = useRef();
  const categoryRef = useRef();

  const addProduct = () => { 
    if (inputReader.current.value === "") { 
      updateMessage('Cannot add a product with an empty name!'); 
    } else { 
      updateMessage( 
        "Product added: " + 
        inputReader.current.value +
        '; Price - ' + 
        priceReader.current.value +
        "; Image - " +
        imageRef.current.value +
        "; Description - " +
        descriptionRef.current.value +
        "; Category - " +
        categoryRef.current.value
      );

      productFile.push({
        "title": inputReader.current.value, 
        "price": Number(priceReader.current.value), 
        "description": descriptionRef.current.value,
        "category": categoryRef.current.value,
        "image": imageRef.current.value 
      });
    }
  }
  
  return (
    <div className='textAligin'>
      <h2>Add product</h2>
      <br />
      <div>
      <label >Product title: </label>
        <input ref={inputReader} type='text' />
        <br /> <br />
        <label >Product price: </label>
        <input ref={priceReader} type="number"  />
        <br /> <br />
        <label >Product img: </label>
        <input ref={imageRef} type='text' />
        <br /><br />
        <label >Description: </label>
        <input ref={descriptionRef} type='text' />
        <br /> <br />
        <label >Category: </label>
        <input ref={categoryRef} type='text' />
        <br /> <br />
        
        <br /> <br />
        <button onClick={addProduct}>Add</button>

        <p style={{ color:'red', background: 'lightgray' }}>
          {message}
        </p>

        <ToastContainer/>
      </div>
    </div>
  )
}

export default AddProduct